import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { Observable, from, of } from "rxjs";

import {BlogTable } from "src/providers/db/tables/blog.table";
import * as BlogActions from "../actions";

import { map, switchMap, catchError } from "rxjs/operators";
import { IBlog} from "../../models/blog";

@Injectable()
export class BlogDBEffects {
  constructor(private actions$: Actions, private table:BlogTable) { }

  @Effect()
  deleteDB$ = this.actions$.pipe(
    ofType(BlogActions.BlogDBActionsType.DELETE_DB),
    switchMap((blog:BlogActions.DeleteDB) => {
    return from(
      this.table.delete(blog.payload)
    ).pipe(
      map((data: IBlog) => {
        return new BlogActions.DeleteDBSuccess(data);
  }),
    catchError(error =>
      of(new BlogActions.DeleteDBFail(error))
    )
      );
})
  );




@Effect()
getBlogs$ = this.actions$.pipe(
  ofType(BlogActions.BlogDBActionsType.LOAD_DB),
  switchMap((blog:BlogActions.LoadDB) => {
  return this.table.getAll().pipe(
    map((data: IBlog[]) => {
      return new BlogActions.LoadDBSuccess(data);
}),
  catchError(error => of(new BlogActions.LoadDBFail(error)))
      );
    })
  );

@Effect()
DropBlogTable$ = this.actions$.pipe(
  ofType(BlogActions.BlogDBActionsType.DROP_TABLE),
  switchMap((delete_table:BlogActions.DropTable) => {
  return from(this.table.drop()).pipe(
    map(delete_table => {
      return new BlogActions.NewTable();
    }),
    catchError(error =>
      of(new BlogActions.DropTableFail(error))
    )
  );
})
  );

@Effect()
NewBlogTable$ = this.actions$.pipe(
  ofType(BlogActions.BlogDBActionsType.NEW_TABLE),
  switchMap((delete_table:BlogActions.NewTable) => {
  return from(this.table.create()).pipe(
    map(new_table => {
      return new BlogActions.NewTableSuccess(new_table);
    }),
    catchError(error =>
      of(new BlogActions.NewTableFail(error))
    )
  );
})
  );
}
