import type {Metadata} from "next";
import {ReactNode} from "react";
import {ApolloWrapper} from "@/ApolloWrapper";
import {Header} from "@/widgets/header";
import "./globals.css"
import "snapinui/style.css"


export const metadata: Metadata = {
    title: "AdminPanel",
    description: "Snapin Admin Panel",
};

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {

    return (
        <html lang="en">
        <body style={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
        <ApolloWrapper>
            <Header/>
            <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "stretch"}}>
                {children}
            </main>
        </ApolloWrapper>
        </body>
        </html>
    );
}
