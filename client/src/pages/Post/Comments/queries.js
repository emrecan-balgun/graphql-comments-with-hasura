import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getAllUsers {
    users {
      _id
      fullName
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
    mutation addNewComment($data: createCommentInput!) {
        createComment(data: $data) {
        _id
    }
  }
`;

export const COMMENTS_SUBSCRIPTION = gql`
  subscription getComments($post_id: Int!) {
    comments(where: {
      post_id: {
        _eq: $post_id
      }
      }){
        id
        text
        user{
            fullName
            profile_photo
        }
    }
}
`;