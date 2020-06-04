import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import {BlogSelectComponent } from "./blog-select";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogSelectListModule } from '../blog-select-list/blog-select-list.module';

@NgModule({
  imports: [
    IonicModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    BlogSelectListModule,
  ],
  exports: [BlogSelectComponent,],
  declarations: [BlogSelectComponent],
  entryComponents: [BlogSelectComponent]
})
export class BlogSelectModule { }