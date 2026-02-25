import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    // Проверяем креды через backend GraphQL
    const token = Buffer.from(`${email}:${password}`).toString("base64");

    const resBackend = await fetch("https://snapin.ru/api/v1/graphql", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${token}`,
        },
        body: JSON.stringify({
            query: `
        mutation LoginAdmin($email: String!, $password: String!) {
          loginAdmin(email: $email, password: $password) {
            logged
          }
        }
      `,
            variables: { email, password },
        }),
    });

    const result = await resBackend.json();

    const logged = Boolean(result?.data?.loginAdmin?.logged);

    if (!logged) {
        return new Response("Unauthorized", { status: 401 });
    }

    // Ставим cookie, если логин успешен
    const response = NextResponse.json({ ok: true });
    response.cookies.set("admin_auth", "true", {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60,
        path: "/",
    });

    return response;
}
