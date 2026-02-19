"use client"

import {useState} from "react"
import {
    Button,
    DropDownContent,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger, Select, Typography,
} from "snapinui"

import {SvgBlockIcon, SvgDeleteIcon, SvgDotsIcon, SvgUnblockIcon} from "@/shared/ui/icons"
import {User} from "@/graphql-types"
import {useBlockUser, useDeleteUser, useUnblockUser} from "@/features";

import { ConfirmDialogFactory } from "../../model/confirmDialogFactory"
import {BanReason, BanReasons, UserAction, UserActions} from "../../model/constants"
import s from "./index.module.css"

type Props = { user: User }


export const UserActionsMenu = ({user}: Props) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [dialogState, setDialogState] = useState<UserAction | null>(null)
    const [banReason, setBanReason] = useState<BanReason>(BanReasons.OTHER)

    const isBanned = Boolean(user.userBan?.reason)

    const {blockUser, loading: blocking} = useBlockUser()
    const {unblockUser, loading: unblocking} = useUnblockUser()
    const {deleteUser, loading: deleting} = useDeleteUser()

    const loading = blocking || unblocking || deleting

    const handleConfirm = async () => {
        if (dialogState === UserActions.BAN) await blockUser({userId: user.id, banReason})
        if (dialogState === UserActions.UNBAN) await unblockUser({userId: user.id})
        if (dialogState === UserActions.DELETE) await deleteUser(user.id)

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
                        <SvgDotsIcon/>
                    </Button>
                </DropdownTrigger>

                <DropDownContent className={s.menu}>
                    <DropdownItem onSelect={() => setDialogState(UserActions.DELETE)}>
                        <Typography variant={"regular_14"} className={s.itemText}>
                            <SvgDeleteIcon width={24} height={24}/>
                            Delete user
                        </Typography>
                    </DropdownItem>

                    <DropdownItem onSelect={() => setDialogState(isBanned ? UserActions.UNBAN : UserActions.BAN)}>
                        <Typography variant={"regular_14"} className={s.itemText}>
                            {isBanned ? <SvgUnblockIcon width={24} height={24}/> :
                                <SvgBlockIcon width={24} height={24}/>}
                            {isBanned ? "Unban user" : "Ban user"}
                        </Typography>
                    </DropdownItem>
                </DropDownContent>
            </DropdownMenu>

            {/* Диалог через фабрику */}
            {ConfirmDialogFactory({
                user,
                actionType: dialogState,
                open: dialogState !== null,
                onOpenAction: () => setDialogState(null),
                onConfirmAction: handleConfirm,
                children:
                    dialogState === UserActions.BAN ? (
                        <Select
                            value={banReason}
                            onValueChange={(v) => setBanReason(v as BanReason)}
                            defaultValue={banReason}
                            options={Object.values(BanReasons).map((reason) => ({
                                value: reason,
                                label: reason,
                            }))}
                            label={"Select ban reason"}
                        />
                    ) : null,
            })}

        </>
    )
}
