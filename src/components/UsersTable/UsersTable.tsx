import React from "react";
import useFetchUsers from "../../hooks/useFetchUsers";

const UsersTable = () => {
  const { data, error, loading } = useFetchUsers(
    "https://jsonplaceholder.typicode.com/users"
  );

  const tableHeaders =

  return <table>
    
  </table>;
};

export default UsersTable;
