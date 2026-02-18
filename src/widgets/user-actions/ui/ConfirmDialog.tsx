"use client"

import {
    AlertAction,
    AlertCancel,
    AlertDescription,
    AlertDialog,
    Button,
    Typography,
} from "snapinui"

type ConfirmDialogProps = {
    open: boolean
    onOpenAction: (open: boolean) => void
    title: string
    description: string
    confirmText?: string
    cancelText?: string
    loading?: boolean
    onConfirmAction: () => Promise<void> | void
}

export const ConfirmDialog = ({
                                  open,
                                  onOpenAction,
                                  title,
                                  description,
                                  confirmText = "Yes",
                                  cancelText = "Cancel",
                                  loading,
                                  onConfirmAction,
                              }: ConfirmDialogProps) => {
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

                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        gap: "24px",
                    }}
                >
                    <AlertCancel asChild>
                        <Button>{cancelText}</Button>
                    </AlertCancel>

                    <AlertAction asChild>
                        <Button variant="outlined" disabled={loading} onClick={onConfirmAction}>
                            {confirmText}
                        </Button>
                    </AlertAction>
                </div>
            </div>
        </AlertDialog>
    )
}
