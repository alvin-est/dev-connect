import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getMe {
    me {
      _id
      name
      email
      profile {
        photoURL
        role
        location
        githubURL
        resumeURL
        skills
      }
      # projects {
      #   _id
      #   title
      #   description
      #   URL
      # }
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query getUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      _id
      name
      email
    }
  }
`;

export const GET_ALL_USERS = gql`
query {
  allUsers {
    _id
    name
    email
    profile
    projects
  }
}
`;