
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {ReactNode} from "react";
import {Sidebar} from "@/widgets/nav/ui/Sidebar";

export default async function AdminLayout({children}: { children: ReactNode }) {
    const cookieStore = await cookies();
    const isAuth = cookieStore.get("admin_auth")?.value === "true";

    if (!isAuth) {
        redirect("/login"); // server redirect
    }

    return (
        <div style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "220px 1fr", // ширина сайдбара + основной контент
            minHeight: "100vh",
        }}>
            <Sidebar/>
            {children}
        </div>
    ); // рендерим admin страницы
}