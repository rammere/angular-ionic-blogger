import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {Blog} from "../../models/blog";
import { IBlog} from "../../models/blog";
import {  NavParams, ModalController } from "@ionic/angular";
import * as fromBlogStore from "../../store/state";
import * as fromBlogSelectors from "../../store/selectors";
import * as fromBlogActions from "../../store/actions";

import { Store } from "@ngrx/store";
import {BlogDetailComponent } from "../blog-detail/blog-detail";
import { FormControl } from "@angular/forms";
import { take, debounceTime } from 'rxjs/operators';


/**
 * Generated class for theBlogListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: "blog-list",
  templateUrl: "blog-list.html",
  styleUrls: ['./blog-list.scss'],
  providers: [Store]
})
export class BlogListComponent implements OnInit {
  searchControl: FormControl;
  navData: { name: string, info: string };

  searching = {
    is_searching: false,
    search_value: "",
    search_param: ""
  };

  public blogs$: Observable < IBlog[] >;
  public blogSearchInput: string = "";

  constructor(
    // privateblogActions:BlogActions,
    private blogStore: Store <fromBlogStore.BlogState >,
    private modalCtrl: ModalController,
    private navParams: NavParams,

  ) {
    this.navData = this.navParams.get('modelData');
    this.initSearch()
  }

  ngOnInit() {
    this.blogs$ = this.blogStore.select<any>(fromBlogSelectors.selectAllData);
    this.blogStore.dispatch(new fromBlogActions.LoadHTTP({ domain: [], limit: 10, offset: 0 }));
}

showRecordDetail(obj?){
  if (!obj) {
    // initialize
    obj =Blog.init();
  }

  const modal = this.modalCtrl.create({
    component:BlogDetailComponent,
    componentProps: { obj: obj }

  });

modal.then(ml => ml.present());
}

itemSelected(recordDetail) {
  // Either dismiss the item
  // or open the detail of that item
  if (!!this.navData) {
    // then it is been called from else where 
    this.modalCtrl.dismiss(recordDetail)

  }
  else {
    this.showRecordDetail(recordDetail)
  }
}

initSearch(){
  this.searchControl = new FormControl();
  this.searchControl.valueChanges.pipe(debounceTime(1000)).subscribe(search => {
    this.setFilteredItems();
  });
}

onSearchInput() {
}
setFilteredItems() {
  this.blogs$ = this.blogStore.select<any>(
    fromBlogSelectors.getBlogBySearchTerm(this.searching.search_value)
  );
}

doRefresh(event) {

  this.blogStore.dispatch(new fromBlogActions.RefreshHTTP({ domain: [], limit: 10, offset: 0}));

setTimeout(() => {
  console.log('Async operation has ended');
  event.target.complete();
}, 2000);


}

loadData(event) {
  this.blogStore
    .select(fromBlogSelectors.selectTotalRecords)
    .pipe(take(1))
    .subscribe(totalRecords => {

      if (totalRecords || totalRecords === 0) {
        this.blogStore.dispatch(new fromBlogActions.LoadHTTP({ domain: [], limit: 10, offset: totalRecords }));
      }
    });
  setTimeout(() => {
    console.log('Done');
    event.target.complete();
  }, 500);

  // get current offset
  // update the limit
}

closeModal() {
  this.modalCtrl.dismiss();
}




}
