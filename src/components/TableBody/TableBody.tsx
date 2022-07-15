import React from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import { User } from "../../types/users.types";
import TableRow from "../TableRow/TableRow";
import { Body } from "./TableBody.styles";

type TableBodyProps = {
  users: User[];
};

const TableBody = ({ users }: TableBodyProps) => {
  return (
    <Body>
      {users.map((user: User, index) => (
        <TableRow key={index} index={index} user={user} />
      ))}
    </Body>
  );
};

export default TableBody;
