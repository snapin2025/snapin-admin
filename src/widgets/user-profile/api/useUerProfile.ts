import {useQuery} from "@apollo/client/react";
import {GET_USER_DETAIL} from "@/shared/api/queries";
import {QueryGetUserArgs, User} from "@/graphql-types";

export const useUerProfile = (userId: number) => {
    const { data, ...state } = useQuery<GetUserQuery, QueryGetUserArgs>(GET_USER_DETAIL, {
        variables: { userId },

    })

    const user: User | null = data
        ? {
            id: data.id,
            userName: data.userName,
            email: data.email,
            createdAt: data.createdAt,
            profile: data.profile,
            userBan: data.userBan ?? undefined,
        }
        : null

    return { user, ...state }

}