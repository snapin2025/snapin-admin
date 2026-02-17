import {gql} from "@apollo/client";


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

