import { Component, Output, Input, EventEmitter } from "@angular/core";
import { IBlog} from "../../models/blog";

@Component({
  selector: "blog-select-item",
  templateUrl: "blog-select-item.html"
})
export class BlogSelectItemComponent {
  @Input() blog: IBlog;

  constructor() { }

  @Output() objEmitter = new EventEmitter < IBlog> ();

  select(blog: IBlog) {
    this.objEmitter.emit(blog);
  }
}
