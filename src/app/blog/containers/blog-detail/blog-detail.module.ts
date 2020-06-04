import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import {BlogDetailComponent } from "./blog-detail";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {BlogFormComponent } from '../../components/blog-form/blog-form';

@NgModule({
  imports: [
    IonicModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule
  ],
  exports: [BlogDetailComponent,BlogFormComponent],
  declarations: [BlogDetailComponent,BlogFormComponent],
  entryComponents: [BlogDetailComponent]
})
export class BlogDetailModule { }