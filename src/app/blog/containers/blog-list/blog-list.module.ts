import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import {BlogListComponent } from './blog-list';
import {BlogItemComponent } from '../../components/blog-item/blog-item';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
  ],
  exports: [BlogListComponent,BlogItemComponent],
  declarations: [BlogListComponent,BlogItemComponent],
  entryComponents: [BlogListComponent,BlogItemComponent]

})
export class BlogListModule { }


