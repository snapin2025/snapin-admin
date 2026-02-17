import { useMutation } from "@apollo/client/react";
import { UNBAN_USER } from "@/shared/api/mutation";
import {MutationUnbanUserArgs, UnBanUserMutation} from "@/graphql-types";

export const useUnblockUser = () => {
    const [mutate, state] =
        useMutation<UnBanUserMutation, MutationUnbanUserArgs>(UNBAN_USER, {
            refetchQueries: ["GetUsers"],
            awaitRefetchQueries: true,
        });

    const unblockUser = async (variables: MutationUnbanUserArgs) => {
        const response = await mutate({ variables });
        return response.data;
    };

    return { unblockUser, ...state };
};