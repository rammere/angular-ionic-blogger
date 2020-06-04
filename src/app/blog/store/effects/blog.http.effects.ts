import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";

import { Observable, pipe, from, of } from "rxjs";

import * as BlogActions from "../actions/";

import { map, switchMap, catchError } from "rxjs/operators";
import { IBlog} from "../../models/blog";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const modelName = 'blog'
@Injectable()
export class BlogHTTPEffects {
  constructor(private actions$: Actions, private httpClient:HttpClient,
    ) { }

  @Effect()
  addHTTP$ = this.actions$.pipe(
    ofType(BlogActions.BlogHTTPActionsType.ADD_HTTP),
    pipe(
      switchMap((action: any) => {
        // TODO for testing 
        return this.httpClient.post("https://5ed89e234378690016c6a276.mockapi.io/api/blogs", { data: action.payload.data })
          .pipe(

            map((data: IBlog) => {
              return new BlogActions.AddUpdateHTTPSuccess({data:action.payload.data});
            }),
            catchError(error =>
              of(new BlogActions.AddUpdateHTTPFail(error))
            )

          )

      })))



  @Effect()
  loadHTTP$ = this.actions$.pipe(
    ofType(BlogActions.BlogHTTPActionsType.LOAD_HTTP),
    switchMap((blogAction: BlogActions.LoadHTTP) => {
      return this.httpClient
        .get("https://5ed89e234378690016c6a276.mockapi.io/api/blogs")
        .pipe(
          map((data: IBlog[]) => {
            return new BlogActions.LoadHTTPSuccess(data);
          }),
          catchError(error =>
            of(new BlogActions.LoadHTTPFail(error))
          )
        );

      //   return this.odooAPI.loadRecords(modelName,blogAction.payload.domain,
      //    blogAction.payload.offset,blogAction.payload.limit,blogAction.payload.fields)
      //     .pipe(
      //       map((data: IBlog[]) => {
      //         return new BlogActions.LoadHTTPSuccess(data);
      // }),
      //   catchError(error =>
      //     of(new BlogActions.LoadHTTPFail(error))
      //   )
      //         );
    })
  );

  @Effect()
  refreshHTTP$ = this.actions$.pipe(
    ofType(BlogActions.BlogHTTPActionsType.REFRESH_HTTP),
    switchMap((blogAction: BlogActions.RefreshHTTP) => {
      return of([])
      //   return this.odooAPI.loadRecords(modelName, blogAction.payload.domain,
      //     blogAction.payload.offset, blogAction.payload.limit, blogAction.payload.fields)
      //     .pipe(
      //       map((data: IBlog[]) => {
      //         return new BlogActions.RefreshHTTPSuccess(data);
      //       }),
      //       catchError(error =>
      //         of(new BlogActions.RefreshHTTPFail(error))
      //       )
      //     );
    })
  );


  @Effect()
  updateHTTP$ = this.actions$.pipe(
    ofType(BlogActions.BlogHTTPActionsType.UPDATE_HTTP),
    switchMap((blogAction: BlogActions.UpdateHTTP) => {
      return of([])
      // return this.odooAPI.updateRecord(modelName, blogAction.payload.id, blogAction.payload.data)
      //   .pipe(
      //     map((data: IBlog) => {
      //       return new BlogActions.AddUpdateHTTPSuccess({data:data});
      //     }),
      //     catchError(error =>
      //       of(new BlogActions.AddUpdateHTTPFail(error))
      //     )
      //   );
    })
  )

  @Effect()
  deleteHTTP$ = this.actions$.pipe(
    ofType(BlogActions.BlogHTTPActionsType.DELETE_HTTP),
    switchMap((blogAction: BlogActions.DeleteHTTP) => {
      // return this.odooAPI.deleteRecord(modelName, blogAction.payload.id)
      //   .pipe(
      //     map((deletedRecordId: number) => {
      //       return new BlogActions.DeleteHTTPSuccess(deletedRecordId);
      //     }),
      //     catchError(error =>
      //       of(new BlogActions.DeleteHTTPFail(error))
      //     )
      //   );
      return of([])
    })
  )

}
