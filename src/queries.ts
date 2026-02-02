import { gql } from "@apollo/client";


type User = {
    id: number;
    userName: string;
    email: string;
    createdAt: string;
    profile: {
        id: number;
    };
    userBan?: {
        id: number;
    } | null;
};

type GetUserResponse = {
    getUser: User;
};

type GetUserVariables = {
    userId: number;
};

export const GET_USERS = gql`
  query GetUsers(
    $pageSize: Int
    $pageNumber: Int
    $sortBy: String
    $sortDirection: SortDirection
    $searchTerm: String
    $statusFilter: UserBlockStatus
  ) {
    getUsers(
      pageSize: $pageSize
      pageNumber: $pageNumber
      sortBy: $sortBy
      sortDirection: $sortDirection
      searchTerm: $searchTerm
      statusFilter: $statusFilter
    ) {
      users {
        id
        userName    
        email
        createdAt
      }
      pagination {
        page
        pageSize
        pagesCount
        totalCount
      }
    }
  }
`;




export type UsersPaginationModel = {
    users: User[];
    pagination: {
        page: number;
        pageSize: number;
        pagesCount: number;
        totalCount: number;
    };
};

export type GetUsersResponse = {
    getUsers: UsersPaginationModel;
};