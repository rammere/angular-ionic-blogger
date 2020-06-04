import { Action } from "@ngrx/store";
import { IBlog} from "../../models/blog";

// HTTP CRUD

export enum BlogHTTPActionsType {
  // HTTP CRUD
  ADD_HTTP = "[Blog] ADD_HTTP",
    UPDATE_HTTP = "[Blog] UPDATE_HTTP",
    ADD_UPDATE_HTTP_SUCCESS = "[Blog] ADD_UPDATE_HTTP_SUCCESS",
    ADD_UPDATE_HTTP_FAIL = "[Blog] ADD_UPDATE_HTTP_FAIL",

    DELETE_HTTP = "[Blog] DELETE_HTTP",
    DELETE_HTTP_SUCCESS = "[Blog] DELETE_HTTP_SUCCESS",
    DELETE_HTTP_FAIL = "[Blog] DELETE_HTTP_FAIL",

    LOAD_HTTP = "[Blog] LOAD_HTTP",
    LOAD_HTTP_SUCCESS = "[Blog] LOAD_HTTP_SUCCESS",
    LOAD_HTTP_FAIL = "[Blog] LOAD_HTTP_FAIL",

    REFRESH_HTTP = "[Blog] REFRESH_HTTP",
    REFRESH_HTTP_SUCCESS = "[Blog] REFRESH_HTTP_SUCCESS",
    REFRESH_HTTP_FAIL = "[Blog] REFRESH_HTTP_FAIL"



}

export class AddHTTP implements Action {
  readonly type =BlogHTTPActionsType.ADD_HTTP;
constructor(public payload: {data:IBlog}) { }
}

export class UpdateHTTP implements Action {
  readonly type =BlogHTTPActionsType.UPDATE_HTTP;
constructor(public payload: { id: number, data: any }) { }
}

export class AddUpdateHTTPSuccess implements Action {
  readonly type =BlogHTTPActionsType.ADD_UPDATE_HTTP_SUCCESS;
constructor(public payload: {data:IBlog}) { }
}
export class AddUpdateHTTPFail implements Action {
  readonly type =BlogHTTPActionsType.ADD_UPDATE_HTTP_FAIL;
constructor(public payload: any) { }
}

export class DeleteHTTP implements Action {
  readonly type =BlogHTTPActionsType.DELETE_HTTP;
constructor(public payload: { id: number }) { }
}

export class DeleteHTTPSuccess implements Action {
  readonly type =BlogHTTPActionsType.DELETE_HTTP_SUCCESS;
constructor(public payload: number) { }
}

export class DeleteHTTPFail implements Action {
  readonly type =BlogHTTPActionsType.DELETE_HTTP_FAIL;
constructor(public payload: any) { }
}

export class LoadHTTP implements Action {
  readonly type =BlogHTTPActionsType.LOAD_HTTP;
constructor(public payload: { domain: any, limit: number, offset: number, fields?: any }) { }
}
export class LoadHTTPSuccess implements Action {
  readonly type =BlogHTTPActionsType.LOAD_HTTP_SUCCESS;
constructor(public payload: IBlog[]) { }
}
export class LoadHTTPFail implements Action {
  readonly type =BlogHTTPActionsType.LOAD_HTTP_FAIL;
constructor(public payload: any) { }
}

export class RefreshHTTP implements Action {
  readonly type =BlogHTTPActionsType.REFRESH_HTTP;
constructor(public payload: { domain: any, limit: number, offset: number, fields?: any }) { }
}
export class RefreshHTTPSuccess implements Action {
  readonly type =BlogHTTPActionsType.REFRESH_HTTP_SUCCESS;
constructor(public payload: IBlog[]) { }
}
export class RefreshHTTPFail implements Action {
  readonly type =BlogHTTPActionsType.REFRESH_HTTP_FAIL;
constructor(public payload: any) { }
}



export type BlogHTTPActions =
  | AddHTTP
  | UpdateHTTP
  | AddUpdateHTTPSuccess
  | AddUpdateHTTPFail
  | DeleteHTTP
  | DeleteHTTPSuccess
  | DeleteHTTPFail
  | LoadHTTP
  | LoadHTTPSuccess
  | LoadHTTPFail
  | RefreshHTTP
  | RefreshHTTPSuccess
  | RefreshHTTPFail;


