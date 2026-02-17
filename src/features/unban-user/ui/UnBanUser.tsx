"use client"
import {AlertAction, AlertCancel, AlertDescription, AlertDialog, Button, Typography} from "snapinui";

import {SvgUnblockIcon} from "@/shared/ui/icons";
import {useUnblockUser} from "@/features/unban-user/api/useUnblockUser";

type Props = {
    userId: number;
    userName?: string;
    closeMenuAction?: () => void;
};
export const UnBanUser = ({userId, userName, closeMenuAction}: Props) => {
    const {unblockUser, loading} = useUnblockUser();

    const handleClick = async () => {
        await unblockUser({userId})
        closeMenuAction();
    };

    return (
        <AlertDialog title={'Un-Ban User'}
                     trigger={<Typography style={{display: "flex", alignItems: "center", gap: "6px"}}
                                          variant={'regular_14'}>
                         <SvgUnblockIcon width={24} height={24}/> Unban in the system
                     </Typography>}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    justifyContent: 'center',
                    gap: '18px'
                }}
            >
                <>
                    <AlertDescription asChild style={{textAlign: 'left', width: '100%'}}>
                        <Typography variant={'regular_16'}>{`Are you sure to unban ${userName} user?`}</Typography>
                    </AlertDescription>
                    <div style={{display: 'flex', justifyContent: 'end', gap: '24px'}}>
                        <AlertCancel asChild >
                            <Button onClick={() => closeMenuAction()}>No</Button>
                        </AlertCancel>
                        <AlertAction asChild>
                            <Button variant={"outlined"} disabled={loading} onClick={handleClick}>Yes</Button>
                        </AlertAction>

                    </div>
                </>
            </div>
        </AlertDialog>
    )
};
