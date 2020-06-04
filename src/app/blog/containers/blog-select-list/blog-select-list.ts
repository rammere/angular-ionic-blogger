import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {BlogOdooFields} from "../../models/blog";
import { IBlog} from "../../models/blog";
import {  NavParams, ModalController } from "@ionic/angular";
import * as fromBlogStore from "../../store/state";
import * as fromBlogSelectors from "../../store/selectors";
import * as fromBlogActions from "../../store/actions";
import { Store } from "@ngrx/store";
import { FormControl } from "@angular/forms";
import { take, debounceTime } from 'rxjs/operators';

@Component({
  selector: "blog-select-list",
  templateUrl: "blog-select-list.html",
  styleUrls: ['./blog-select-list.scss'],
  providers: [Store]
})

export class BlogSelectListComponent implements OnInit {
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
    this.blogStore.dispatch(new fromBlogActions.LoadHTTP({ domain: [], limit: 10, offset: 0, fields:BlogOdooFields }));
}



itemSelected(recordDetail) {
    this.modalCtrl.dismiss(recordDetail)
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

  this.blogStore.dispatch(new fromBlogActions.LoadHTTP({ domain: [], limit: 10, offset: 0, fields:BlogOdooFields }));

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
