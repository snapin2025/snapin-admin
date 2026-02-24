
import {memo} from "react";
import { Table } from "@/shared/ui/Table/Table";
import Link from "next/link";
import {SUPER_ADMIN_ROUTES} from "@/shared/lib/super-admin-routes";
import {SvgProfile} from "@/shared/ui/icons";
import {Button} from "snapinui";
import {User} from "@/graphql-types";
import { UserActionsMenu } from "../user-actions-menu/UserActionsMenu";


export const UserRow = memo(({ user }: { user: User }) => (
    <Table.TableRow>
        <Table.TableCell>{user.userBan?.reason && "🚫"}</Table.TableCell>
        <Table.TableCell>{user.id}</Table.TableCell>
        <Table.TableCell style={{ width: "min-content" }}>
            <Button asChild variant="textButton" style={{ padding: 0 }}>
                <Link href={SUPER_ADMIN_ROUTES.USER_DETAIL(user.id)}>
                    <SvgProfile />
                </Link>
            </Button>
        </Table.TableCell>
        <Table.TableCell>{user.userName}</Table.TableCell>
        <Table.TableCell>
            {new Date(user.createdAt).toLocaleDateString("ru-RU")}
        </Table.TableCell>
        <Table.TableCell>
            <UserActionsMenu user={user} />
        </Table.TableCell>
    </Table.TableRow>
));

UserRow.displayName = "UserRow";