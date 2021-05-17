import gql from 'graphql-tag';

/**
 * @summary Get post contingent on its slug
 * @param {string} slug
 */
export const GET_POST = gql`
  query GetPostBySlug($slug: String!) {
    post(slug: $slug) {
      title
      subtitle
      createdAt
      updatedAt
      imgSrc
      tags
      body
    }
  }
`;

/**
 * @summary Get all posts
 */
export const GET_POSTS = gql`
  query GetAllPosts {
    posts {
      title
      imgSrc
      slug
    }
  }
`;