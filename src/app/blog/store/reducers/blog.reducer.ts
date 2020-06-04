import * as fromBlogActions from "../actions";

import {BlogState, initialState,blogAdapter } from "../state/blog.state";
import { dbSwitch } from "./blog.db.switch";
import { httpSwitch } from "./blog.http.switch";
import { stateSwitch } from "./blog.switch";

export function BlogReducer(
  state = initialState,
  action: fromBlogActions.BlogDBActions
):BlogState {

  let returned_state = undefined;
  returned_state = dbSwitch(action, state,blogAdapter, initialState);
  if (returned_state) return returned_state;
  returned_state = httpSwitch(action, state,blogAdapter, initialState);
  if (returned_state) return returned_state;

  returned_state = stateSwitch(action, state,blogAdapter, initialState);
  if (returned_state) return returned_state;


  return state;
}
