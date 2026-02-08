import {HttpLink} from "@apollo/client";
import {ApolloClient, InMemoryCache, registerApolloClient,} from "@apollo/client-integration-nextjs";

function getBasicAuthToken() {
    // const email = process.env.ADMIN_EMAIL!;
    // const password = process.env.ADMIN_PASSWORD!;
    const email =  "admin@gmail.com";
    const password = "admin";
    return Buffer.from(`${email}:${password}`).toString("base64");
}



export const {getClient, query, PreloadQuery} = registerApolloClient(() => {
    const token = getBasicAuthToken();
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            // this needs to be an absolute url, as relative urls cannot be used in SSR
            uri: "https://inctagram.work/api/v1/graphql",
            headers: {
                Authorization: `Basic ${token}`,
            },
            fetchOptions: {
                // you can pass additional options that should be passed to `fetch` here,
                // e.g. Next.js-related `fetch` options regarding caching and revalidation
                // see https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
            },
        }),
    });
});