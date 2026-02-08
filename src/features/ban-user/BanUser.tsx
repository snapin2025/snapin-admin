"use client"
import {banUser} from "@/actions";
import {Button} from "snapinui";

type Props = {
    userId: number;
};
export const BanUser = ({userId}: Props) => {

    const handleClick = async () => {
        await banUser(userId, "Админ забанил");
    };

    return <Button onClick={handleClick}>Ban</Button>;
};
