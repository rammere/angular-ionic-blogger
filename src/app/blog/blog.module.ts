import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";


// Store
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { effects, reducers } from "./store";

//model
import {Blog} from "./models/blog";
//containers
import {BlogContainerModule } from "./containers/container.module";
//services

import {BlogTable } from "src/providers/db/tables/blog.table";

//routes

@NgModule({
  imports: [
    IonicModule,
    EffectsModule.forFeature(effects),
    StoreModule.forFeature("blog", reducers),
   BlogContainerModule
  ],
  //
  exports: [BlogContainerModule],
  providers: [Blog,BlogTable]
  //
})
export class BlogModule { }
