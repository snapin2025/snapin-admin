"use client"

import {User} from "@/graphql-types"
import {ReactNode} from "react";
import {UserAction, UserActions} from "@/widgets/user-actions/model/constants";
import {AlertAction, AlertCancel, AlertDescription, AlertDialog, Button, Typography} from "snapinui";


type DialogFactoryOptions = {
    user: User
    actionType: UserAction
    open: boolean
    onOpenAction: (open: boolean) => void
    onConfirmAction: () => Promise<void> | void
    children?: ReactNode
}

export const ConfirmDialogFactory = ({
                                         user,
                                         actionType,
                                         open,
                                         onOpenAction,
                                         onConfirmAction,
                                         children,
                                     }: DialogFactoryOptions) => {
    // Настраиваем заголовок и тексты
    let title = ""
    let description = ""

    switch (actionType) {
        case UserActions.BAN:
            title = "Ban User"
            description = `Are you sure you want to ban ${user.userName}?`
            break
        case UserActions.UNBAN:
            title = "Unban User"
            description = `Are you sure you want to unban ${user.userName}?`
            break
        case UserActions.DELETE:
            title = "Delete User"
            description = `Are you sure you want to delete ${user.userName}?`
            break
    }

    // Возвращаем компонент готового диалога
    return (
        <AlertDialog open={open} onOpenChange={onOpenAction} title={title}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                }}
            >
                <AlertDescription asChild>
                    <Typography variant="regular_16">{description}</Typography>
                </AlertDescription>
                {children && <div>{children}</div>}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        gap: "24px",
                    }}
                >
                    <AlertCancel asChild>
                        <Button>No</Button>
                    </AlertCancel>

                    <AlertAction asChild>
                        <Button variant="outlined" onClick={onConfirmAction}>
                            Yes
                        </Button>
                    </AlertAction>
                </div>
            </div>
        </AlertDialog>
    )
}
