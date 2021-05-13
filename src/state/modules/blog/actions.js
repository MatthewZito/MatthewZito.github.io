import { not } from "js-heuristics";

import { blogApi } from '@/services/api';

/**
 * @summary Fetch blog posts metadata
 */
export const fetchPosts = async ({ state, commit, dispatch }) => {
  if (not(state.posts.length)) {
    await blogApi.fetchPosts(({ ok, data, error }) => {
      if (ok) commit('updatePosts', data.Posts);
      else {
        dispatch('notifications/addNotification', {
          type: 'error',
          message: error
        } , { root: true });
      }
    });
  }
};
