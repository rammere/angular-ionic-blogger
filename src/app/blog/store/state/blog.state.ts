import { IBlog} from "../../models/blog";

import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { EntityAdapter } from "@ngrx/entity/src/models";

export interface BlogState extends EntityState < IBlog> {
  loading: boolean;
  uploading: boolean;
  offset: number;
  limit: number;
  syncing: boolean;
  notifications: number;
}

export const blogAdapter: EntityAdapter <
  IBlog
> = createEntityAdapter < IBlog> ();


export const initialState:BlogState =blogAdapter.getInitialState(
  {
    uploading: false,
    offset: 0,
    limit: 10,
    loading: false,
    syncing: false,
    notifications: 0
  }
);
