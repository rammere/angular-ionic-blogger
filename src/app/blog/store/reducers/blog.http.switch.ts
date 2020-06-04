import * as fromBlogActions from "../actions";

export function httpSwitch(action, state,blogAdapter, initialState) {
  switch (action.type) {
    // HTTP Actions
    case fromBlogActions.BlogHTTPActionsType.LOAD_HTTP: {
      return {
        ...state,
        loading: true
      };
    }


  case fromBlogActions.BlogHTTPActionsType.LOAD_HTTP_SUCCESS: {
    // TODO need to be reviewed  
    return { ...blogAdapter.upsertMany(action.payload, state), loading: false }
  }

  case fromBlogActions.BlogHTTPActionsType.REFRESH_HTTP_SUCCESS: {
    // TODO need to be reviewed  
    return { ...blogAdapter.addAll(action.payload, state), loading: false }
  }

    case fromBlogActions.BlogHTTPActionsType.ADD_UPDATE_HTTP_SUCCESS: {
    return { ...blogAdapter.upsertOne(action.payload.data, state), loading: false
  }
}


    case fromBlogActions.BlogHTTPActionsType.DELETE_HTTP_SUCCESS: {
  return { ...blogAdapter.removeOne(action.payload.id, state), loading: false
}
    }


    case fromBlogActions.BlogHTTPActionsType.LOAD_HTTP_FAIL: {
  return {
    ...state,
    loading: false,
    syncing: false
  };
}


    case fromBlogActions.BlogActionsType.UPDATE_OFFSET: {
  return {
    ...state,
    offset: action.offset
  };
}

    case fromBlogActions.BlogActionsType.UPDATE_LIMIT: {
  return {
    ...state,
    limit: action.limit
  };
}



    case fromBlogActions.BlogHTTPActionsType.DELETE_HTTP_SUCCESS: {
  return blogAdapter.removeOne(action.payload, state);
}

    // case fromBlogActions.BlogSyncActionsType
    //   .DELETE_SYNC_HTTP_SUCCESS: {
    //   returnblogAdapter.removeOne(action.payload, state);
    // }
    case fromBlogActions.BlogHTTPActionsType.ADD_UPDATE_HTTP_SUCCESS: {
  return blogAdapter.addOne(action.payload, state)
}

    // default:
    //   return state;
  }
}
