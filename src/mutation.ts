import {gql} from "@apollo/client";


export const LOGIN_ADMIN = gql`
  mutation LoginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      logged
    }
  }
`;


export const BAN_USER = gql`
  mutation BanUser($userId: Int!, $banReason: String!) {
    banUser(userId: $userId, banReason: $banReason)
  }
`;

export const UNBAN_USER = gql`
  mutation UnBanUser($userId: Int!) {
      unbanUser(userId: $userId) 
  } 
`
