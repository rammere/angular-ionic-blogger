import { Action } from "@ngrx/store";
import { IBlog} from "../../models/blog";

// HTTP CRUD

//  CRUD
export enum BlogActionsType {
    ADD = "[Blog] ADD",
    UPDATE = "[Blog] UPDATE",
    ADD_UPDATE_SUCCESS = "[Blog] ADD_UPDATE_SUCCESS",
    ADD_UPDATE_FAIL = "[Blog] ADD_UPDATE_FAIL",

    DELETE = "[Blog] DELETE",
    DELETE_SUCCESS = "[Blog] DELETE_TRAINING_SUCCESS",
    DELETE_FAIL = "[Blog] DELETE_TRAINING_FAIL",
    UPDATE_OFFSET = '[Blog] Update Offset',
    UPDATE_LIMIT = '[Blog] Update Limit',
    UPDATE_NOTIFICATIONS = '[Blog] UPDATE_NOTIFICATIONS',
    INCREMENT_NOTIFICATIONS = '[Blog] INCREMENT_NOTIFICATIONS',
    DECREMENT_NOTIFICATIONS = '[Blog] DECREMENT_NOTIFICATIONS',
    CLEAR_NOTIFICATIONS = '[Blog] CLEAR_NOTIFICATIONS',

}


export class Add implements Action {
  readonly type =BlogActionsType.ADD;
  constructor(public payload: IBlog) { }
}

export class Update implements Action {
  readonly type =BlogActionsType.UPDATE;
constructor(public payload: IBlog) { }
}

export class AddUpdateSuccess implements Action {
  readonly type =BlogActionsType.ADD;
// comes from effect
constructor(public payload: IBlog) { }
}
export class AddUpdateFail implements Action {
  readonly type =BlogActionsType.ADD_UPDATE_FAIL;
constructor(public payload: any) { }
}

export class Delete implements Action {
  readonly type =BlogActionsType.DELETE;
constructor(public payload: IBlog) { }
}

export class UpdateOffset implements Action {
  readonly type =BlogActionsType.UPDATE_OFFSET;
constructor(public offset: number) { }
}
export class UpdateLimit implements Action {
  readonly type =BlogActionsType.UPDATE_LIMIT;
constructor(public limit: number) { }

}


export class UpdateNotifications implements Action {

  readonly type = BlogActionsType.UPDATE_NOTIFICATIONS;
  constructor(public payload: { notifications: number }) { }
}
export class IncrementNotifications implements Action {
  readonly type = BlogActionsType.INCREMENT_NOTIFICATIONS;
}
export class DecrementNotifications implements Action {
  readonly type = BlogActionsType.DECREMENT_NOTIFICATIONS;
}
export class ClearNotifications implements Action {
  readonly type = BlogActionsType.CLEAR_NOTIFICATIONS;
}


export type BlogActions =
  | Add
  | Update
  | AddUpdateSuccess
  | AddUpdateFail
  | Delete
  | UpdateOffset
  | UpdateLimit
  | UpdateNotifications
  | IncrementNotifications
  | DecrementNotifications
  | ClearNotifications;
