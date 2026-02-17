import {useState} from "react";
import {Button, DropDownContent, DropdownItem, DropdownMenu, DropdownTrigger} from "snapinui";
import {SvgDotsIcon} from "@/shared/ui/icons";
import {BanUser} from "@/features/ban-user/ui/BanUser";
import {UnBanUser} from "@/features/unban-user/ui/UnBanUser";
import s from "./index.module.css"
import {User} from "@/graphql-types";

export const UserActionsMenu = ({user}: { user: User }) => {
    const [open, setOpen] = useState<boolean>(false);
    const isBanned = Boolean(user.userBan?.reason)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownTrigger asChild>
                <Button variant="textButton"
                        style={{padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <SvgDotsIcon/>
                </Button>
            </DropdownTrigger>
            <DropDownContent className={s.menu}>
                <DropdownItem onSelect={(e) => {
                    e.preventDefault()
                }}>
                    {isBanned ?
                        <UnBanUser userId={user.id} userName={user.userName} closeMenuAction={() => setOpen(false)}/>
                        :
                        <BanUser userId={user.id} userName={user.userName} closeMenuAction={() => setOpen(false)}/>}
                </DropdownItem>
                <DropdownItem onSelect={(e) => {
                    e.preventDefault()
                }}>

                </DropdownItem> <DropdownItem>

                3
            </DropdownItem>
            </DropDownContent>
        </DropdownMenu>

    );
};

