"use client"
import {SuperAdminSignInForm} from "@/widgets/sign-in-form/ui/SuperAdminSignInForm";
import {MutationLoginAdminArgs} from "@/graphql-types";
import {useRouter} from 'next/navigation'
import {SUPER_ADMIN_ROUTES} from "@/shared/lib/super-admin-routes";



const Page = () => {
    const router = useRouter()

    const handleLogin = async ({ email, password }: MutationLoginAdminArgs) => {
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                 console.log("✅ Admin logged in");
                router.push(SUPER_ADMIN_ROUTES.USERS);
            } else {
                console.log("❌ Invalid credentials");
                alert("Неверный email или пароль");
            }
        } catch (e) {
            console.error(e);
            alert("Ошибка при логине");
        }
    };

    return (
        <section className={"loginPage"}>
            <SuperAdminSignInForm onSubmitFormAction={handleLogin}/>
        </section>
    );
};

export default Page;