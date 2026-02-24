"use client"

import {Pagination, Select} from "snapinui";
import {GET_USERS} from "@/shared/api";
import {UsersList} from "@/widgets/users-list";
import {usePaginationParams} from "@/widgets/pagination";
import {useQuery} from "@apollo/client/react";
import {GetUsersQuery, GetUsersQueryVariables, SortDirection, UserBlockStatus} from "@/graphql-types";


export default function Page() {
    const {currentPage, pageSize, setPage, setPageSize} = usePaginationParams();

    const {data, previousData, error} = useQuery<GetUsersQuery, GetUsersQueryVariables>(GET_USERS, {
        variables: {
            pageSize: pageSize,
            pageNumber: currentPage,
            sortBy: "createdAt",
            sortDirection: SortDirection.Desc,
            searchTerm: "",
            statusFilter: UserBlockStatus.All,
        },
        fetchPolicy: "cache-and-network",
        notifyOnNetworkStatusChange: true,
    });

    const currentData = data ?? previousData;
    const users = currentData?.getUsers?.users ?? [];
    const totalCount = currentData?.getUsers?.pagination?.totalCount ?? 0;

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    const handlePageSize = (pageSize: string) => {
        setPageSize(Number(pageSize));
    }


    if (error) return <p>Error: {error.message}</p>;

    return (
        <section style={{
            padding: "1.5rem"
        }}>
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
