"use client"

import {Pagination, Select} from "snapinui";
import {GET_USERS} from "@/shared/api";
import {UsersList} from "@/widgets/users-list";
import {usePaginationParams} from "@/widgets/pagination";
import {useQuery} from "@apollo/client/react";
import {GetUsersQuery, GetUsersQueryVariables, SortDirection, UserBlockStatus} from "@/graphql-types";


export default function Page ()  {
    const {currentPage, pageSize, setPage, setPageSize} = usePaginationParams();

    const {data, loading, error} = useQuery<GetUsersQuery, GetUsersQueryVariables>(GET_USERS, {
        variables: {
            pageSize: pageSize,
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
        setPage(page);
    };

    const handlePageSize = (pageSize: string) => {
        setPageSize(Number(pageSize));
    }


    if (error) return <p>Error: {error.message}</p>;

    return (
        <section style={{}}>
            <UsersList users={users}/>
            <div style={{display: "flex", justifyContent: "start", alignItems: "center"}}>

                <Pagination onPageChange={handlePageChange}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            totalCount={totalCount}/>
                <Select value={String(pageSize)}
                        onValueChange={handlePageSize}
                        defaultValue={String(pageSize)}
                        options={[{value: '10', label: '10'}, {value: '20', label: '20'},]}
                        label={"select  page size"}
                />
            </div>

        </section>
    );
};
