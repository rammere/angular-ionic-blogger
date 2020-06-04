import * as fromBlogActions from "../actions";
export function dbSwitch(action, state,blogAdapter, initialState) {

  switch (action.type) {
    case fromBlogActions.BlogDBActionsType.LOAD_DB_SUCCESS: {
      return blogAdapter.addMany(action.payload, state);
    }
    case fromBlogActions.BlogDBActionsType.ADD_UPDATE_DB_SUCCESS: {
      return blogAdapter.upsertOne(
        { id: action.payload.id, changes: action.payload },
        state
      );
    }

    case fromBlogActions.BlogDBActionsType.ADD_UPDATE_DB_FAIL: {
      return { ...state, syncing: false };
    }

    case fromBlogActions.BlogDBActionsType.NEW_TABLE: {
      state = initialState;
      return state;
    }

    case fromBlogActions.BlogDBActionsType.DELETE_DB_SUCCESS: {
      return blogAdapter.removeOne(action.payload.id, state);
    }

    case fromBlogActions.BlogDBActionsType.DELETE_MANY_DB_SUCCESS: {
      return blogAdapter.removeMany(action.payload, state);
    }



    // default:
    //   return state;
  }
}
