import styled from "styled-components";

export const ColumnTitle = styled.td`
  font-size: 16px;
  padding: 20px 0;
  font-weight: bold;
`;

export const THead = styled.thead`

  display: none;

  @media screen and (min-width:1024px) {
    display: table-header-group;
  }
`