import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
// import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import {BlogListComponent } from './blog-list';
// import {BlogItemComponent } from '../../components/blog-item/blog-item';
import { BlogListRoutingModule } from './blog-list-routing';
import { BlogItemComponent } from '../../components/blog-item/blog-item';
import { BlogDetailModule } from '../blog-detail/blog-detail.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    BlogListRoutingModule,
    BlogDetailModule
  ],
  // exports: [],
  declarations: [BlogListComponent,BlogItemComponent],
  // entryComponents: []

})
export class BlogListModule { }


