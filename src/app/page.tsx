import {getClient} from "@/ApolloClient";
import {LOGIN_ADMIN} from "@/mutation";

type LoginAdminResponse = {
    loginAdmin: {
        logged: boolean;
    };
};

export default async function Home() {
    let logged = false;
    let error: string | null = null;

    try {
        const {data} = await getClient().mutate<LoginAdminResponse>({
            mutation: LOGIN_ADMIN,
            variables: {
                email: "admin@gmail.com",
                password: "admin",
            },
        });

        logged = Boolean(data?.loginAdmin.logged);
    } catch (e: unknown) {
        console.log(e)
        error = e.message;
    }

    return (
        <div>
            <main>
                <h1>Admin auth test</h1>

                {error && <p style={{color: "red"}}>❌ Ошибка: {error}</p>}

                {!error && (
                    <p>
                        Статус авторизации:{" "}
                        {logged ? "✅ УСПЕХ" : "❌ НЕ УСПЕХ"}
                    </p>
                )}

            </main>
        </div>
    );
}
