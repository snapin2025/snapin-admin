import {useQuery} from "@apollo/client/react";
import {GET_USER_DETAIL} from "@/shared/api/queries";
import {
    GetSuperAdminUserDetailQuery,
    QueryGetUserArgs,
} from "@/graphql-types";

export const useUserProfile = (userId: number) => {
    const { data, ...state } = useQuery<GetSuperAdminUserDetailQuery, QueryGetUserArgs>(GET_USER_DETAIL, {
        variables: { userId },
        skip: userId == null, // пропускаем запрос, если нет id
        fetchPolicy: 'cache-and-network',
        notifyOnNetworkStatusChange: true,
    })

    return {
        user: data?.getUser ,
        ...state
    }

}