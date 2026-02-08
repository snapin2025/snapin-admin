
import {User} from "@/graphql-types";
import {BanUser} from "@/features/ban-user/BanUser";
import {UnBanUser} from "@/features/unban-user/UnBanUser";
import {Table} from "@/components/Table/Table";



type Props = {
    users: User[];
};

const UsersList = ({users}: Props) => {
    if (users.length === 0) return []
    console.log(users);
    return (
        <Table.Root>
            <Table.TableHeader>
                <Table.TableRow>
                    <Table.TableCellHead></Table.TableCellHead>
                    <Table.TableCellHead>User ID</Table.TableCellHead>
                    <Table.TableCellHead>Profile Link</Table.TableCellHead>
                    <Table.TableCellHead>Username</Table.TableCellHead>
                    <Table.TableCellHead>Date added</Table.TableCellHead>
                    <Table.TableCellHead>Actions</Table.TableCellHead>
                </Table.TableRow>
            </Table.TableHeader>
            <Table.TableBody>
                {users.map((user: User) => (
                    <Table.TableRow key={user.id}>
                        <Table.TableCell>
                            {user.userBan?.reason }
                        </Table.TableCell>
                        <Table.TableCell>
                            {user.id}
                        </Table.TableCell>
                        <Table.TableCell>
                           {user.userName}
                        </Table.TableCell>
                        <Table.TableCell>
                           {user.userName}

                        </Table.TableCell>
                        <Table.TableCell>
                          {new Date(user.createdAt).toLocaleDateString('ru-RU')}
                        </Table.TableCell>
                        <Table.TableCell>
                            <BanUser userId={user.id}/>
                            <UnBanUser userId={user.id}/>
                        </Table.TableCell>
                    </Table.TableRow>
                ))}
            </Table.TableBody>
        </Table.Root>

    );
};

export default UsersList;