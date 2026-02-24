"use client"
import {use} from "react";
import {useUserProfile} from "@/widgets/user-profile/api/useUserProfile";


export default function Page ({params}: {params: Promise<{id: string}>}) {
    const { id } = use(params)
    const { user} = useUserProfile(Number(id))
    return (
        <div>
            {JSON.stringify(user, null, 2)}
        </div>
    );
};

