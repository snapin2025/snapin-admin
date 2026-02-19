
import {useMutation} from "@apollo/client/react";
import {DELETE_USER} from "@/shared/api";


export const useDeleteUser = () => {
    const [mutate, state] = useMutation(DELETE_USER, {
        refetchQueries: ["GetUsers"],
        awaitRefetchQueries: true,
    })

    const deleteUser = (userId: number) =>
        mutate({ variables: { userId } })

    return { deleteUser, ...state }
}
