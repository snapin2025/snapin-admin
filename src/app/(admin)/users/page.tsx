import {query} from "@/ApolloClient";
import {GET_USERS} from "@/queries";
import {GetUsersQuery, GetUsersQueryVariables, SortDirection, User, UserBlockStatus} from "@/graphql-types";
import UsersList from "@/components/UsersList";

import {Table} from "@/components/Table/Table";
import {BanUser} from "@/features/ban-user/BanUser";
import {UnBanUser} from "@/features/unban-user/UnBanUser";


const Page = async () => {

    const {data} = await query<GetUsersQuery, GetUsersQueryVariables>({
        query: GET_USERS,
        variables: {
            pageSize: 1,
            pageNumber: 1,
            sortBy: "createdAt",
            sortDirection: SortDirection.Desc,
            statusFilter: UserBlockStatus.All,
            // searchTerm: "alex", // опционально
        },
        context: {
            fetchOptions: {
                next: {tags: ["users"]} // подписываем компонент на тег "users"
            }
        },
    })
    return (
        <div>
            <h1>Users page</h1>
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
                    {data.getUsers.users.map((user: User) => {
                        console.log(user.userBan);
                            return <Table.TableRow key={user.id}>
                                <Table.TableCell>
                                    {user.userBan?.reason ? '🚫' : '✅'}
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
                        }
                    )}
                </Table.TableBody>
            </Table.Root>

            <ul>

            </ul>

            <p>
                Всего пользователей: {data?.getUsers.pagination.totalCount}
            </p>
        </div>
    );
};

export default Page;