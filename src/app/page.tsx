import {redirect} from "next/navigation";
import {SUPER_ADMIN_ROUTES} from "@/shared/lib/super-admin-routes";

export default async function Home() {
    redirect(`${SUPER_ADMIN_ROUTES.SIGN_IN}`);
    return (
        <div>
            <main>
                <h1>RootPage</h1>
            </main>
        </div>
    );
}
