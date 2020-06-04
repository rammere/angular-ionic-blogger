import { Action } from "@ngrx/store";
import { IBlog} from "../../models/blog";
import {BlogActionsType } from "./blog.actions";
import {blogAdapter } from "../state";

// HTTP CRUD

// DB CRUD
export enum BlogDBActionsType {

  ADD_DB = "[Blog] ADD_DB",
    UPDATE_DB = "[Blog] UPDATE_DB",
    ADD_UPDATE_DB_SUCCESS = "[Blog] ADD_UPDATE_DB_SUCCESS",
    ADD_UPDATE_DB_FAIL = "[Blog] ADD_UPDATE_DB_FAIL",

    DELETE_DB = "[Blog] DELETE_DB",
    DELETE_DB_SUCCESS = "[Blog] DELETE_DB_SUCCESS",
    DELETE_DB_FAIL = "[Blog] DELETE_DB_FAIL",

    LOAD_DB = "[Blog] LOAD_DB",
    LOAD_DB_SUCCESS = "[Blog] LOAD_DB_SUCCESS",
    LOAD_DB_FAIL = "[Blog] LOAD_DB_SUCCESS",

    ADD_MANY_DB = "[Blog] ADD_MANY_DB",
    ADD_MANY_DB_SUCCESS = "[Blog] ADD_MANY_DB_SUCCESS",

    ADD_MANY_DB_FAIL = "[Blog] ADD_MANY_DB_FAIL",
    ADD_UPDATE_MANY_LINE_DB_SUCCESS = "[Blog] ADD_UPDATE_MANY_LINE_DB_SUCCESS",
    ADD_UPDATE_MANY_LINE_DB_FAIL = "[Blog] ADD_UPDATE_MANY_LINE_DB_FAIL",

    DELETE_MANY_DB = "[Blog] DELETE_MANY_DB",
    DELETE_MANY_DB_SUCCESS = "[Blog] DELETE_MAN_DB_SUCCESS",
    DELETE_MANY_DB_FAIL = "[Blog] DELETE_MAN_DB_FAIL",

    DROP_TABLE = "[Blog] DROP_TABLE",
    DROP_TABLE_SUCCESS = "[Blog] DROP_TABLE_SUCCESS",
    DROP_TABLE_FAIL = "[Blog] DROP_TABLE_FAIL",

    NEW_TABLE = "[Blog] NEW_TABLE",
    NEW_TABLE_SUCCESS = "[Blog] NEW_TABLE_SUCCESS",
    NEW_TABLE_FAIL = "[Blog] NEW_TABLE_FAIL"

}

export class AddDB implements Action {
  readonly type =BlogDBActionsType.ADD_DB;
constructor(public payload: IBlog) { }
}

export class UpdateDB implements Action {
  readonly type =BlogDBActionsType.UPDATE_DB;
constructor(public payload: { id: number; changes: any }) { }
}

export class AddUpdateDBSuccess implements Action {
  readonly type =BlogDBActionsType.ADD_UPDATE_DB_SUCCESS;
// comes from effect
constructor(public payload: IBlog) { }
}
export class AddUpdateDBFail implements Action {
  readonly type =BlogDBActionsType.ADD_UPDATE_DB_FAIL;
constructor(public payload: any) { }
}

export class DeleteDB implements Action {
  readonly type =BlogDBActionsType.DELETE_DB;
constructor(public payload: IBlog) { }
}

export class DeleteDBSuccess implements Action {
  readonly type =BlogDBActionsType.DELETE_DB_SUCCESS;
constructor(public payload: IBlog) { }
}

export class DeleteDBFail implements Action {
  readonly type =BlogDBActionsType.DELETE_DB_FAIL;
constructor(public payload: any) { }
}

export class LoadDB implements Action {
  readonly type =BlogDBActionsType.LOAD_DB;
constructor() { }
}
export class LoadDBSuccess implements Action {
  readonly type =BlogDBActionsType.LOAD_DB_SUCCESS;
constructor(public payload: IBlog[]) { }
}
export class LoadDBFail implements Action {
  readonly type =BlogDBActionsType.LOAD_DB_FAIL;
constructor(public payload: any) { }
}
export class AddManyDB implements Action {
  readonly type =BlogDBActionsType.ADD_MANY_DB;
constructor(public payload: IBlog[]) { }
}
export class AddManyDBSuccess implements Action {
  readonly type =BlogDBActionsType.ADD_MANY_DB;
constructor(public payload: IBlog[]) { }
}

export class AddManyDBFail implements Action {
  readonly type =BlogDBActionsType.ADD_MANY_DB;
constructor(public payload: any) { }
}

export class DeleteManyDB implements Action {
  readonly type =BlogDBActionsType.DELETE_MANY_DB;
constructor(public payload: number[]) { }
}

export class DeleteManyDBSuccess implements Action {
  readonly type =BlogDBActionsType.DELETE_MANY_DB_SUCCESS;
constructor(public payload: any) { }
}
export class DeleteManyDBFail implements Action {
  readonly type =BlogDBActionsType.DELETE_MANY_DB_FAIL;
constructor(public payload: any) { }
}

export class DropTable implements Action {
  readonly type =BlogDBActionsType.DROP_TABLE;
constructor() { }
}

export class DropTableSuccess implements Action {
  readonly type =BlogDBActionsType.DROP_TABLE_SUCCESS;
constructor(public payload: any) { }
}
export class DropTableFail implements Action {
  readonly type =BlogDBActionsType.DROP_TABLE_FAIL;
constructor(public payload: any) { }
}

export class NewTable implements Action {
  readonly type =BlogDBActionsType.NEW_TABLE;
constructor() { }
}
export class NewTableSuccess implements Action {
  readonly type =BlogDBActionsType.NEW_TABLE_SUCCESS;
constructor(public payload: any) { }
}
export class NewTableFail implements Action {
  readonly type =BlogDBActionsType.NEW_TABLE_FAIL;
constructor(public payload: any) { }
}

export type BlogDBActions =
  | AddDB
  | UpdateDB
  | AddUpdateDBSuccess
  | AddUpdateDBFail
  | DeleteDB
  | DeleteDBSuccess
  | DeleteDBFail
  | LoadDB
  | LoadDBSuccess
  | LoadDBFail
  | AddManyDB
  | AddManyDBSuccess
  | AddManyDBFail
  | DeleteManyDB
  | DeleteManyDBSuccess
  | DeleteManyDBFail
  | DropTable
  | DropTableSuccess
  | DropTableFail
  | NewTable
  | NewTableSuccess
  | NewTableFail;
