// app/api/graphql/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    // Берём cookie из запроса
    const cookieHeader = req.headers.get("cookie") || "";

    // Проверяем авторизацию
    const isAuth = cookieHeader.includes("admin_auth=true");
    if (!isAuth) {
        //redirect
        return new Response("Unauthorized", {status: 401})
    };

    // Берём тело запроса от клиента
    const body = await req.text();

    // Серверные креды для внешнего API
    const token = Buffer.from(
        `${process.env.ADMIN_EMAIL}:${process.env.ADMIN_PASSWORD}`
    ).toString("base64");

    const resBackend = await fetch("https://inctagram.work/api/v1/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${token}`,
        },
        body,
    });

    const data = await resBackend.json();

    return NextResponse.json(data);
}
