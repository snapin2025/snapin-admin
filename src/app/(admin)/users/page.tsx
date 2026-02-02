import {query} from "@/ApolloClient";
import {GET_USERS, GetUsersResponse} from "@/queries";


const Page =async () => {
    const { data } = await query<GetUsersResponse>({
        query: GET_USERS,
        variables: {
            pageSize: 10,
            pageNumber: 1,
            sortBy: "createdAt",
            sortDirection: "desc",
            statusFilter: "ALL",
            // searchTerm: "alex", // опционально
        },
    });

    return (
        <div>
            <h1>Users page</h1>

            <ul>
                {data?.getUsers.users.map((user) => (
                    <li key={user.id}>
                        <b>{user.userName}</b> — {user.email}
                    </li>
                ))}
            </ul>

            <p>
                Всего пользователей: {data?.getUsers.pagination.totalCount}
            </p>
        </div>
    );
};

export default Page;