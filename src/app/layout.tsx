import type {Metadata} from "next";
import "snapinui/style.css"
import {ReactNode} from "react";
import {ApolloWrapper} from "@/ApolloWrapper";
import "./globals.css"
import {Header} from "@/widgets/header/ui/Header";

export const metadata: Metadata = {
    title: "AdminPanel",
    description: "Snapin Admin Panel",
};

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {

    return (
        <html lang="en">
        <body>
        <ApolloWrapper>
            <Header/>
            <main>
                {children}
            </main>
        </ApolloWrapper>
        </body>
        </html>
    );
}
