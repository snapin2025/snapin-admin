import {useMutation} from "@apollo/client/react";
import {BanUserMutation, BanUserMutationVariables} from "@/graphql-types";
import {BAN_USER} from "@/shared/api/mutation";


export const useBlockUser = () => {
    const [mutate, state] =     useMutation<BanUserMutation, BanUserMutationVariables>(BAN_USER, {
        refetchQueries: ["GetUsers"],
        awaitRefetchQueries: true,
    });

    const blockUser = async (variables: BanUserMutationVariables) => {
        const response = await mutate({ variables });
        return response.data;
    };

    return { blockUser, ...state };
};