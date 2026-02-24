'use client'
import s from './SuperAdminSignInForm.module.css'
import {Button, Input, Typography} from "snapinui";
import {FormEvent} from "react";
import {MutationLoginAdminArgs} from "@/graphql-types";


type Props = {
    onSubmitFormAction: (data: MutationLoginAdminArgs) => void
}

export function SuperAdminSignInForm({onSubmitFormAction}: Props) {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string
        const password = formData.get("password") as string


        // Отдаем данные наружу родителю через callback
        onSubmitFormAction({email, password})
    }

    return (
        <div className={s.card}>
            <div className={s.header}>
                <Typography variant="h1" asChild className={s.title}>
                    <h1>Sign In</h1>
                </Typography>
            </div>

            <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
                <div className={s.fieldsWrapper}>
                    <Input
                        label="Email"
                        id="super-admin-email"
                        name={"email"}
                        type="email"
                        placeholder="admin@gmail.com"
                        autoComplete="off"
                        className={s.input}
                    />
                    <Input
                        label="Password"
                        id="super-admin-password"
                        type="password"
                        name="password"
                        placeholder="*****"
                        autoComplete="new-password"
                        className={s.input}
                    />
                </div>


                <Button type="submit" className={s.submit}>
                    Sign In
                </Button>
            </form>
        </div>
    )
}
