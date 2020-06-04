import * as fromBlogActions from "../actions";
export function stateSwitch(action, state,blogAdapter, initialState) {

  switch (action.type) {
    case fromBlogActions.BlogActionsType.DELETE: {
      return blogAdapter.removeOne(action.payload, state);
    }

 
    case fromBlogActions.BlogActionsType.UPDATE_NOTIFICATIONS: {
      const notifications = state.notifications
      return { ...state, notifications };
    }

    case fromBlogActions.BlogActionsType.INCREMENT_NOTIFICATIONS: {
      let notifications = state.notifications
      notifications++;
      return { ...state, notifications };
    }
    case fromBlogActions.BlogActionsType.DECREMENT_NOTIFICATIONS: {
      let notifications = state.notifications
      notifications--;
      return { ...state, notifications };
    }
    case fromBlogActions.BlogActionsType.CLEAR_NOTIFICATIONS: {
      const notifications = 0
      return { ...state, notifications };
    }

    // default:
    //   return state;
  }
}
