"use client"

import {
    AlertAction,
    AlertCancel,
    AlertDescription,
    AlertDialog,
    Button,
    Typography,
} from "snapinui"
import {useDeleteUser} from "../api/useDeleteUser"
import {SvgDeleteIcon} from "@/shared/ui/icons";


type Props = {
    userId: number
    userName?: string
    closeMenuAction?: () => void
}

export const DeleteUser = ({
                               userId,
                               userName,
                               closeMenuAction,
                           }: Props) => {
    const {deleteUser, loading} = useDeleteUser()

    const handleDelete = async () => {
        await deleteUser(userId)
        closeMenuAction?.()
    }

    return (
        <AlertDialog
            title="Delete User"
            trigger={
                <Typography
                    style={ {display: "flex", alignItems: "center", gap: "6px"}}
                    variant="regular_14"
                >
                    <SvgDeleteIcon width={24} height={24}/>
                    Delete user
                </Typography>
            }
        >
            <AlertDescription asChild>
                <Typography variant="regular_16">
                    Are you sure you want to delete {userName}?
                </Typography>
            </AlertDescription>

            <div style={{display: "flex", justifyContent: "end", gap: "24px"}}>
                <AlertCancel asChild>
                    <Button onClick={closeMenuAction}>No</Button>
                </AlertCancel>

                <AlertAction asChild>
                    <Button
                        variant="outlined"
                        disabled={loading}
                        onClick={handleDelete}
                    >
                        Yes
                    </Button>
                </AlertAction>
            </div>
        </AlertDialog>
    )
}
