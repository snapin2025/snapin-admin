import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.text();

    const token = Buffer.from(
        `${process.env.ADMIN_EMAIL}:${process.env.ADMIN_PASSWORD}`
    ).toString("base64");

    const res = await fetch("https://inctagram.work/api/v1/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${token}`,
        },
        body,
    });

    const data = await res.json();
    return NextResponse.json(data);
}