
    import {unBanUser} from "@/actions";
    import {Button} from "snapinui";

    type Props = {
        userId: number;
    };
    export const UnBanUser = ({userId}: Props) => {
        const handleClick = async () => {
            await unBanUser(userId);
        };
        return <Button onClick={handleClick}>Unban</Button>;
    };
