"use client"


import {LoginAdminMutation, LoginAdminMutationVariables} from "@/graphql-types";
import {LOGIN_ADMIN} from "@/mutation";
import {useMutation} from "@apollo/client/react";

export function useAdminLogin() {
    const [loginAdmin, {data, loading, error}] = useMutation<LoginAdminMutation, LoginAdminMutationVariables>(LOGIN_ADMIN)

    const login = async (email: string, password: string) => {
        try {
            const {data} = await loginAdmin({
                variables: {email, password},
            })

            return {
                logged: data.loginAdmin.logged,
            }
        } catch (e) {
            console.error(e)
            return {
                logged: false,
            }
        }
    }

    return {
        login,
        logged: Boolean(data?.loginAdmin.logged),
        loading,
        error,
    }
}
