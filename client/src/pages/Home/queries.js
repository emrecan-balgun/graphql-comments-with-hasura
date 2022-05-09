import { gql } from '@apollo/client';

export const POSTS_SUBSCRIPTION = gql`
  subscription posts {
    posts {
      id
      title
      short_description
      user {
        profile_photo
      }
    }
  }
`;