"use server";

import {getClient} from "@/ApolloClient";

import {BanUserMutation, MutationBanUserArgs, MutationUnbanUserArgs} from "@/graphql-types";
import {BAN_USER, UNBAN_USER} from "@/mutation";
import {revalidatePath, revalidateTag, updateTag} from "next/cache";

export async function banUser(userId: number, banReason: string) {
    const {data} = await getClient().mutate<
        BanUserMutation,
        MutationBanUserArgs
    >({
        mutation: BAN_USER,
        variables: {userId, banReason},
    });

    revalidatePath("/users");
    return data;
}

export async function unBanUser(userId: number) {
    const {data} = await getClient().mutate<BanUserMutation, MutationUnbanUserArgs>({
        mutation: UNBAN_USER,
        variables: {userId}
    });
    revalidatePath("/users");
    return data?.banUser;
}