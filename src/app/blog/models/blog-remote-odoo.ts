import { Injectable } from "@angular/core";
import * as fromBlogState from "../store/state";
import * as fromBlogActions from "../store/actions";
import * as fromBlogSelectors from "../store/selectors";
import { Store } from "@ngrx/store";
import { OdooAPI } from "../../services/odoo/services/odooAPI";

// This class is used by the effects module as well ass modelSync service

@Injectable()
export class BlogRemoteOdoo {
  constructor(
    public store: Store<fromBlogState.BlogState>,
    public odooAPI: OdooAPI,
  ) {

    // super(store,odooAPI,odooSync,fromBlogSelectors,fromBlogActions)
  }

  public getRemoteModelName() {
    return "blog";
  }


  public getMetaDomain() {
    return [];
  }

  public getRelationalField() {
    var me = this;
    let rel_fields = {};
    return rel_fields;
  }


  public getBinaryField(): any {
    let bin_fields = {};

    return bin_fields;
  }

  public remoteFields() {
    return {

      onCreate() {
        return [
         
             
               
             
                "name",
                 
               
             
                "description",
                 
               
             
                "userId",
                 
               
             
                "createdAt",
                 
               
             
                "avatar",
                 
               
             
                "blogImage",
                 
               
             
                "tags",
                 
               
             
                "likes",
                 
               
        
                "client_id"
          ];
      },

      onUpdate() {
        return [
         
             
               
             
                "name",
                 
               
             
                "description",
                 
               
             
                "userId",
                 
               
             
                "createdAt",
                 
               
             
                "avatar",
                 
               
             
                "blogImage",
                 
               
             
                "tags",
                 
               
             
                "likes",
                 
               
                "client_id"
          ];
      },

      onRead() {

        return [

         
             
               
             
                "name",
                 
               
             
                "description",
                 
               
             
                "userId",
                 
               
             
                "createdAt",
                 
               
             
                "avatar",
                 
               
             
                "blogImage",
                 
               
             
                "tags",
                 
               
             
                "likes",
                 
               
                "sync_ids"
          ];

      }

    };
  }

  public getRemoteFields() {


return [

         
             
               
             
                "name",
                 
               
             
                "description",
                 
               
             
                "userId",
                 
               
             
                "createdAt",
                 
               
             
                "avatar",
                 
               
             
                "blogImage",
                 
               
             
                "tags",
                 
               
             
                "likes",
                 
               
                "sync_ids"
          ];
  }



}