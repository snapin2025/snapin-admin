"use client"
import {AlertAction, AlertCancel, AlertDescription, AlertDialog, Button, Typography} from "snapinui";
import {useBlockUser} from "../api/useBlockUser";
import {SvgBlockIcon} from "@/shared/ui/icons";

type Props = {
    userId: number;
    userName?: string;
    closeMenuAction?: () => void;
};
export const BanUser = ({userId, userName, closeMenuAction}: Props) => {
    const {blockUser, loading} = useBlockUser();

    const handleClick = async () => {
        await blockUser({userId, banReason: 'Admin'})
        closeMenuAction()
    };

    return (
        <AlertDialog title={'Ban User'}
                     trigger={<Typography style={{display: "flex", alignItems: "center", gap: "6px"}} variant={'regular_14'}>
                         <SvgBlockIcon width={24} height={24}/> Ban in the system
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
                        <Typography variant={'regular_16'}>{`Are you sure to ban this user, ${userName}?`}</Typography>
                    </AlertDescription>
                    <div style={{display: 'flex', justifyContent: 'end', gap: '24px'}}>
                        <AlertCancel asChild>
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
