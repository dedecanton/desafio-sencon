import React from "react";
import { ColumnTitle, THead } from "./TableHeader.styles";

const tableHeaders: string[] = [
    "Nome",
    "Email",
    "Telefone",
    "Endereço Completo",
    "Cidade",
    "Empresa",
  ];


const TableHeader = () => {
  return (
    <THead>
      <tr>
        {tableHeaders.map((header, index) => (
          <ColumnTitle key={index}>{header}</ColumnTitle>
        ))}
      </tr>
    </THead>
  );
};

export default TableHeader;
