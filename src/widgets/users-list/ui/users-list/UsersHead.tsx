import { Table } from "@/shared/ui/Table/Table";
import {memo} from "react";


export const UsersHead = memo(() => (
    <Table.TableHeader>
        <Table.TableRow>
            <Table.TableCellHead></Table.TableCellHead>
            <Table.TableCellHead>User ID</Table.TableCellHead>
            <Table.TableCellHead>Profile Link</Table.TableCellHead>
            <Table.TableCellHead>Username</Table.TableCellHead>
            <Table.TableCellHead>Date added</Table.TableCellHead>
            <Table.TableCellHead>Actions</Table.TableCellHead>
        </Table.TableRow>
    </Table.TableHeader>
));

UsersHead.displayName = "UsersHead";