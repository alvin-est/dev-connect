import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($title: String!, $description: String!, $URL: String!) {
    addProject(title: $title, description: $description, URL: $URL) {
      _id
      title
      description
      URL
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($profile: UpdateProfileInput!) {
    updateProfile(profile: $profile) {
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
    }
  }
`;
