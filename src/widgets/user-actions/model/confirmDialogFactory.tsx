"use client"

import {User} from "@/graphql-types"
import { ConfirmDialog } from "../ui/ConfirmDialog"
import {ReactNode} from "react";



type ActionType = "ban" | "unban" | "delete" | "logout"

type DialogFactoryOptions = {
    user: User
    actionType: ActionType
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
                                           }: DialogFactoryOptions) => {
    // Настраиваем заголовок и тексты
    let title = ""
    let description = ""
    let confirmText = ""

    switch (actionType) {
        case "ban":
            title = "Ban User"
            description = `Are you sure you want to ban ${user.userName}?`
            confirmText = "Ban"
            break
        case "unban":
            title = "Unban User"
            description = `Are you sure you want to unban ${user.userName}?`
            confirmText = "Unban"
            break
        case "delete":
            title = "Delete User"
            description = `Are you sure you want to delete ${user.userName}?`
            confirmText = "Delete"
            break
    }

    // Возвращаем компонент готового диалога
    return (
        <ConfirmDialog
            open={open}
            onOpenAction={onOpenAction}
            title={title}
            description={description}
            confirmText={confirmText}
            onConfirmAction={onConfirmAction}
        />
    )
}
