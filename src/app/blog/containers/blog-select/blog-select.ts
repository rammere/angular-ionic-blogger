import { Component, OnInit, forwardRef, Input } from "@angular/core";
import { IBlog,Blog} from "../../models/blog";
import { NavParams,ModalController} from "@ionic/angular";
import { Store } from "@ngrx/store";
import * as fromBlogActions from "../../store/actions";
import * as fromBlogSelectors from "../../store/selectors";
import * as fromBlogStore from "../../store/state";
import { BlogSelectListComponent } from '../blog-select-list/blog-select-list';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';


// export function validateCounterRange(c: FormControl) {
//   let err = {
//     requiredError: {
//       given: c.value,
//       required: true,
//     }
//   };

//   return (c.value > 10 || c.value < 0) ? err : null;
// }

@Component({
  selector: "blog-select",
  templateUrl: "blog-select.html",
  styleUrls: ['./blog-select.scss'],
  providers: [Blog,
      { 
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => BlogSelectComponent),
        multi: true
      }
  ]
})
export class BlogSelectComponent implements OnInit , ControlValueAccessor{

  @Input()
  blog_id :any= 0;

  @Input()
  view_only=false

  private blog: IBlog;
  propagateChange = (_: any) => {};


  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private blogStore: Store < fromBlogStore.BlogState >
  ) {
  }

  ngOnInit() {
    // get the item if exist 
    if (this.blog_id !== undefined && this.blog_id !== null) {
      if (this.blog_id.length > 0) {
        this.blog_id = this.blog_id[0]
      }
      this.blogStore.select(fromBlogSelectors.
        selectById(this.blog_id))
        .pipe(take(1)).subscribe((blog: any) => {
          if (blog && blog.length > 0) {
            this.blog = blog[0]
          }
        }
        )
    }
  }

  writeValue(blog_id: any) {
    console.log(blog_id)
    // this.blog_id = blog_id
    if (blog_id !== undefined && blog_id !== null) {
      if (blog_id.length > 0) {
        blog_id = blog_id[0]
      }
      this.blogStore.select(fromBlogSelectors.
        selectById(blog_id))
        .pipe(take(1)).subscribe((blog: any) => {
          if (blog && blog.length > 0) {
            this.blog = blog[0]
          }
        }
        )
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }


  select(event) {
    // prevent opening other windows ( like when background is clickable)
    event.stopPropagation();

    const modal = this.modalCtrl.create({
      component: BlogSelectListComponent,
      componentProps: {}
    });
    modal.then((mdl) => mdl.present())
    modal.then((mdl) => mdl.onDidDismiss().then(data => {
      this.propagateChange(data.data.id)
      this.blog = data.data
    }))
  }






}
