import {gql} from "@apollo/client";
import {getClient} from "./ApolloClient";

interface LoginAdminResponse {
    loginAdmin: {
        logged: boolean;
    };
}

interface LoginAdminVariables {
    email: string;
    password: string;
}


export const LOGIN_ADMIN = gql`
  mutation LoginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      logged
    }
  }
`;


export async function loginAdminAction(email: string, password: string) {
    const client = getClient();

    const {data} = await client.mutate<LoginAdminResponse, LoginAdminVariables>({
        mutation: LOGIN_ADMIN,
        variables: {
            email,
            password,
        },
    });

    return data?.loginAdmin.logged;
}