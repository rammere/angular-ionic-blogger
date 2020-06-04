import { createFeatureSelector, createSelector } from "@ngrx/store";

import { BlogState,blogAdapter } from "../state/blog.state";

export const selectBlogState = createFeatureSelector<BlogState>("blog");

export const getBlogEntities = (state: BlogState) => {
  state.entities;
};

export const getBlogLoading = (state: BlogState) => state.loading;

export const getNotifications = (state: BlogState) => state.notifications;

export const getBlogUploading = (state: BlogState) => state.uploading;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} =blogAdapter.getSelectors();

export const getSyncing = (state: BlogState) => state.syncing;

export const selectAllIDS = createSelector(selectBlogState, selectIds);
export const selectTotalRecords = createSelector(selectBlogState, selectTotal);
export const selectAllData = createSelector(selectBlogState, selectAll);
export const selectAllEntities = createSelector(
  selectBlogState,
  selectEntities
);
export const selectTotalBlog = createSelector(selectBlogState, selectTotal);

export const selectSyncing = createSelector(selectBlogState, getSyncing);

export const getById = id =>
  createSelector(selectAllEntities, customerEntities => customerEntities[id]);
export const getBlogById = id =>
  createSelector(selectAllEntities,blogEntities =>blogEntities[id]);
export const getBlogByName = name =>
  createSelector(selectAllData, entities =>
    entities.filter((entity: any) => {
      if (entity.name.includes(name)) return entity.id;
    })
  );

export const selectIDByServerID = server_id =>
  createSelector(
    selectAllData,
    data => data.filter((record: any) => record.server_id == server_id)[0].id
  );

export const selectByServerId = server_id =>
  createSelector(
    selectAllData,
    // customerEntities => customerEntities[id]
    data => data.filter((record: any) => record.server_id == server_id)
  );


  export const selectNotifications = createSelector(
    selectBlogState,
    getNotifications
  );

  export const selectById = id =>
  createSelector(
    selectAllData,
    data => {return data.filter((record: any) => record.id == id)}
  );
export const getBlogBySearchTerm = search_term =>
  createSelector(selectAllData,blogs => {
  if (!(!!search_term)) {
    return blogs;
  } else {
    var filtered_blog=blogs.filter((blog: any) => {
      if (blog.name.includes(search_term)) {
        return true;
      } else return false;
    });
    return filtered_blog;
  }
});