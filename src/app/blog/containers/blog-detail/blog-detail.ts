import { Component, OnInit } from "@angular/core";
import { IBlog,Blog} from "../../models/blog";
import { NavParams,ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import * as fromBlogActions from "../../store/actions";
import * as fromBlogStore from "../../store/state";


@Component({
  selector: "blog-detail",
  templateUrl: "blog-detail.html",
  styleUrls: ['./blog-detail.scss'],
  providers: [Blog]
})
export class BlogDetailComponent implements OnInit {
   blog: IBlog;
   valid: boolean;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private store: Store < fromBlogStore.BlogState >
  ) {
    let obj = this.navParams.get("obj");
    this.blog= obj;

  }

  ngOnInit() {
    // dispatch load product id
  }

  onSubmitChange(value: {blog: IBlog; valid: boolean
}) {
  // submit the form
  this.blog= value.blog;
  this.valid = value.valid;
  if (!this.valid) return;
  if (!this.blog.id) {
    // so it is new add
    this.store.dispatch(new fromBlogActions.AddHTTP({data:this.blog}));
  } else {
    //just update
    this.store.dispatch(new fromBlogActions.UpdateHTTP({ id: this.blog.id, data: this.blog}));
}
// since submit we can now dismiss this view
this.modalCtrl.dismiss(this.blog);
  }

onBlogChange(value: {blog: IBlog; valid: boolean }) {
  this.blog= value.blog;
  this.valid = value.valid;
}

delete () {
  this.store.dispatch(new fromBlogActions.DeleteHTTP({ id: this.blog.id}));
// dispatch delete event
this.modalCtrl.dismiss();
}
closeModal() {
  this.modalCtrl.dismiss();

}
}
