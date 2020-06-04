import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import {BlogSelectListComponent } from './blog-select-list';
import {BlogSelectItemComponent } from '../../components/blog-select-item/blog-select-item';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
  ],
  exports: [BlogSelectListComponent,BlogSelectItemComponent],
  declarations: [BlogSelectListComponent,BlogSelectItemComponent],
  entryComponents: [BlogSelectListComponent,BlogSelectItemComponent]

})
export class BlogSelectListModule { }


