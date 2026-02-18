"use client"

import { useState } from "react"
import {
    Button,
    DropDownContent,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "snapinui"
import { SvgDotsIcon } from "@/shared/ui/icons"
import { User } from "@/graphql-types"
import { useBlockUser } from "@/features/ban-user/api/useBlockUser"
import { useUnblockUser } from "@/features/unban-user/api/useUnblockUser"
import { useDeleteUser } from "@/features/delete-user/api/useDeleteUser"
import s from "./index.module.css"
import { ConfirmDialogFactory } from "../model/confirmDialogFactory"

type Props = { user: User }
type ActionType = "ban" | "unban" | "delete"

export const UserActionsMenu = ({ user }: Props) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [dialogState, setDialogState] = useState<null | ActionType>(null)
    const [banReason, setBanReason] = useState("Admin")

    const isBanned = Boolean(user.userBan?.reason)

    const { blockUser, loading: blocking } = useBlockUser()
    const { unblockUser, loading: unblocking } = useUnblockUser()
    const { deleteUser, loading: deleting } = useDeleteUser()

    const loading = blocking || unblocking || deleting

    const handleConfirm = async () => {
        if (dialogState === "ban") await blockUser({ userId: user.id, banReason })
        if (dialogState === "unban") await unblockUser({ userId: user.id })
        if (dialogState === "delete") await deleteUser(user.id)

        setDialogState(null)
        setMenuOpen(false)
    }

    return (
        <>
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                <DropdownTrigger asChild>
                    <Button
                        variant="textButton"
                        style={{
                            padding: "2px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <SvgDotsIcon />
                    </Button>
                </DropdownTrigger>

                <DropDownContent className={s.menu}>
                    <DropdownItem onSelect={() => setDialogState("delete")}>
                        Delete user
                    </DropdownItem>

                    <DropdownItem onSelect={() => setDialogState(isBanned ? "unban" : "ban")}>
                        {isBanned ? "Unban user" : "Ban user"}
                    </DropdownItem>
                </DropDownContent>
            </DropdownMenu>

            {/* Диалог через фабрику */}
            {dialogState &&
                ConfirmDialogFactory({
                    user,
                    actionType: dialogState,
                    open: !!dialogState,
                    onOpenAction: () => setDialogState(null),
                    onConfirmAction: handleConfirm,
                    children:
                        dialogState === "ban" ? (
                            <select
                                value={banReason}
                                onChange={(e) => setBanReason(e.target.value)}
                                style={{ padding: "6px", width: "100%" }}
                            >
                                <option value="Admin">Admin</option>
                                <option value="Spam">Spam</option>
                                <option value="Other">Other</option>
                            </select>
                        ) : null,
                })}
        </>
    )
}
