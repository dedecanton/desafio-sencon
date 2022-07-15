import styled from "styled-components";

export const TableItem = styled.td`
  padding: 20px 10px;

  &::before {
    content: attr(data-label);
    font-weight: bold;
  }

  @media screen and (min-width: 1024px) {
    border: 2px solid white;

    &::before {
      display: none;
    }
  }
`;

export const TableRowItem = styled.tr`
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: #141721;
  border-radius: 20px;


  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    
    transform: scale(1.05);

    ${TableItem} {
      border-color: #141721;
    }
  }

  @media screen and (min-width: 1024px) {
    width: auto;
    display: table-row;

    &:hover{
      background-color: white;
      color: #141721;
      transform: none;
    }
  }
`;
