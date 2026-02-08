import {getClient} from "@/ApolloClient";
import {LOGIN_ADMIN} from "@/mutation";
import {LoginAdminMutation} from "@/graphql-types";


export default async function Home() {
    let logged = false;
    const error: string | null = null;

    try {
        const {data} = await getClient().mutate<LoginAdminMutation>({
            mutation: LOGIN_ADMIN,
            variables: {
                email: "admin@gmail.com",
                password: "admin",
            },
        });
        console.log(data);
        logged = Boolean(data?.loginAdmin.logged);
    } catch (e: unknown) {
        console.log(e)

    }

    return (
        <div>
            <main>
                <h1>Admin auth test</h1>
                {`${logged}`}

            </main>
        </div>
    );
}
