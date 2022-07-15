import React, { ChangeEvent } from "react";
import { Input } from "./FilterBar.styles";

type FilterBarProps = {
  onChange: (value: string) => void;
};

const FilterBar = ({ onChange }: FilterBarProps) => {
  const handleChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Input type="text" placeholder="Filtrar usuário pelo nome, email ou cidade" onChange={handleChangeFilter} />
  );
};

export default FilterBar;
