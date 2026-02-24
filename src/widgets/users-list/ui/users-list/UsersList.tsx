"use client"
import {User} from "@/graphql-types";
import {Table} from "@/shared/ui/Table/Table";
import { UsersHead } from "./UsersHead";
import { UserRow } from "./UserRow";

type Props = {
    users: User[];
};

export const UsersList = ({users}: Props) => {
    // Минимальная высота контейнера, чтобы не прыгал layout
    const minHeight = 500;

    return (
        <Table.Root style={{width: "100%", maxWidth: "972px", minHeight}}>
            <UsersHead/>
            <Table.TableBody>
                {users.map((user) => <UserRow key={user.id} user={user}/>)}
            </Table.TableBody>
        </Table.Root>
    );
};
