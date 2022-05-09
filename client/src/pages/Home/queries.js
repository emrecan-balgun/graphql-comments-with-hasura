import { gql } from '@apollo/client';

const postFragment = gql`
  fragment PostFragment on Post {
      id
      title
      short_description
      user{
        profile_photo
      }
  }
`

export const GET_POSTS = gql`
    query getAllPosts {
    posts{
      id
      title
      short_description
      user{
        profile_photo
      }
    }
  }
`;

export const POSTS_SUBSCRIPTION = gql`
    subscription {
    postCreated{
        ...PostFragment
    }
  }
  ${postFragment}
`;
