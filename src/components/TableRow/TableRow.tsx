import React, { useState } from "react";
import { User } from "../../types/users.types";
import getUserEnterpise from "../../utils/getUserEnterpise";
import Modal from "../Modal/Modal";
import { TableItem, TableRowItem } from "./TableRow.styles";

export type TableRowTypes = {
  user: User;
  index: number;
};

const TableRow = ({
  user: { address, email, id, name, phone, username },
  index,
}: TableRowTypes) => {
  const userAddress = `${address.street}, ${address.suite} ${address.zipcode}`;
  const enterpise = getUserEnterpise(index);
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsShowingModal(false);
  };

  const handleShowModal = () => {
    setIsShowingModal(true)
  }


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
      {tableItems.map(({dataLabel, item}, itemIndex) => <TableItem onClick={handleShowModal} data-label={dataLabel} key={itemIndex}>{item}</TableItem>)}
      <Modal username={username} id={id} index={index} isShowing={isShowingModal} onClose={handleCloseModal} />
    </TableRowItem>
  );
};

export default TableRow;
