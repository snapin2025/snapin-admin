import {HttpLink} from "@apollo/client";
import {ApolloClient, InMemoryCache, registerApolloClient,} from "@apollo/client-integration-nextjs";

export function getBasicAuthToken() {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    return Buffer.from(`${email}:${password}`).toString("base64");
}



export const {getClient, query, PreloadQuery} = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: "http://localhost:3000/api/graphql", // <-- наш route handler
        }),
    });
});