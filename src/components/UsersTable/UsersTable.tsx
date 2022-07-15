import React, { useEffect, useState } from "react";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import FilterBar from "../FilterBar/FilterBar";
import Spinner from "../Spinner/Spinner";

import { Container, ErrorMessage, Table } from "./UsersTable.styles";

import { User } from "../../types/users.types";

import useFetchUsers from "../../hooks/useFetchUsers";
import filterUsers from "../../utils/filterUsers";

const UsersTable = () => {
  const { data, error, loading } = useFetchUsers(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    if (data) setUsers(data);
  }, [data]);

  useEffect(() => {
    if (users) setFilteredUsers(users);
  }, [users]);

  const handleChangeFilteredUsers = (value: string) => {
    const newFilteredUsers = filterUsers(users, value);
    setFilteredUsers(newFilteredUsers);
  };

  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

  if (loading) return <Spinner />;

  return (
    <Container>
      <FilterBar onChange={handleChangeFilteredUsers} />
      {filteredUsers.length ? (
        <Table>
          <TableHeader />
          <TableBody users={filteredUsers} />
        </Table>
      ) : (
        <ErrorMessage>Nenhum usuário encontrado!</ErrorMessage>
      )}
    </Container>
  );
};

export default UsersTable;
