import React from "react";
import { User } from "../../types/users.types";
import getUserEnterpise from "../../utils/getUserEnterpise";
import { TableItem, TableRowItem } from "./TableRow.styles";

export type TableRowTypes = {
  user: User;
  index: number;
};

const TableRow = ({
  user: { address, email, id, name, phone },
  index,
}: TableRowTypes) => {
  const userAddress = `${address.street}, ${address.suite} ${address.zipcode}`;
  const enterpise = getUserEnterpise(index);

  const tableItems = [
    {dataLabel: 'Nome: ', item:name},
    {dataLabel: 'Email: ', item:email},
    {dataLabel: 'Telefone: ', item:phone},
    {dataLabel: 'Endereço Completo: ', item:userAddress},
    {dataLabel: 'Cidade: ', item:address.city},
    {dataLabel: 'Empresa: ', item:enterpise},
  ]
  
  return (
    <TableRowItem>
      {tableItems.map(({dataLabel, item}, index) => <TableItem data-label={dataLabel} key={index}>{item}</TableItem>)}
    </TableRowItem>
  );
};

export default TableRow;
