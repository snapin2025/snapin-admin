"use client"
import {GET_USERS} from "@/queries";
import {GetUsersQuery, GetUsersQueryVariables, SortDirection, UserBlockStatus} from "@/graphql-types";
import UsersList from "@/widgets/users-list/ui/UsersList";
import {useQuery, useSuspenseQuery} from "@apollo/client/react";
import {Pagination} from "snapinui";
import {useRouter, useSearchParams} from "next/navigation";


const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = Math.max(
        Number(searchParams.get("page")) || 1,
        1
    );
    const pageSize = 10;

    const {data, error} = useQuery<GetUsersQuery, GetUsersQueryVariables>(GET_USERS, {
        variables: {
            pageSize: 10,
            pageNumber: currentPage,
            sortBy: "createdAt",
            sortDirection: SortDirection.Desc,
            searchTerm: "",
            statusFilter: UserBlockStatus.All,
        },
    });
    const users = data?.getUsers?.users ?? [];
    const totalCount = data?.getUsers?.pagination?.totalCount ?? 0;

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(page));

        // startTransition(() => {
        //     router.push(`?${params.toString()}`, {scroll: false});
        // });
        router.push(`?${params.toString()}`, {scroll: false});
    };


    // if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <section style={{}}>
            <UsersList users={users}/>
            <Pagination onPageChange={handlePageChange}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        totalCount={totalCount}/>
        </section>
    );
};

export default Page;