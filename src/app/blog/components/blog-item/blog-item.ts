import { Component, Output, Input, EventEmitter } from "@angular/core";
import { IBlog} from "../../models/blog";

@Component({
  selector: "blog-item",
  templateUrl: "blog-item.html",
  styleUrls: ['./blog-item.scss']
})
export class BlogItemComponent {
  @Input() blog: IBlog;

  constructor() { }

  @Output() objEmitter = new EventEmitter < IBlog> ();

  select(blog: IBlog) {
    this.objEmitter.emit(blog);
  }
}
