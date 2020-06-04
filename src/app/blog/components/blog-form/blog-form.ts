import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import { takeUntil, debounceTime, skip } from "rxjs/operators";
import { Subject } from "rxjs";

import { IBlog} from "../../models/blog";

@Component({
  selector: "blog-form",
  templateUrl: "blog-form.html",
  styleUrls: ['./blog-form.scss']
})
export class BlogFormComponent implements OnChanges, OnDestroy {
  @Input() blog: IBlog;
  @Output()blogChange = new EventEmitter < { valid: boolean;blog: IBlog}> ();
@Output()
onSubmitChange = new EventEmitter < { valid: boolean;blog: IBlog}> ();
formGroup: FormGroup;
  private destroyed$ = new Subject<void>();

constructor(private formBuilder: FormBuilder) {
  this.buildForm();
}

ngOnChanges(changes: SimpleChanges) {
  if (changes["blog"] && changes["blog"].currentValue) {
    this.formGroup.patchValue(this.blog);
  }
}

submitForm() {
  this.onSubmitChange.emit({
     blog: this.formGroup.value,
    valid: this.formGroup.valid
    });
  }

ngOnDestroy() {
  this.destroyed$.next();
  this.destroyed$.complete();
}

buildForm() {
  this.formGroup = this.formBuilder.group({
     
   id: ["",[]],
     
   name: ["",[Validators.required]],
     
   description: ["",[]],
     
   comment_id: ["",[]],
     
   user_id: ["",[]],
     
   blog_datetime: ["",[]],
     
   avatar: ["",[]],
     
   blogImage: ["",[]],
     
   likes: ["",[]],
     
   userId: ["",[]],
     
   createdAt: ["",[]],
     

      });


this.formGroup.valueChanges
  .pipe(takeUntil(this.destroyed$), skip(1), debounceTime(500))
  .subscribe((blog: IBlog) => {
  this.blogChange.emit({
         blog:blog,
    valid: this.formGroup.valid
        });
      });
    }
  }
