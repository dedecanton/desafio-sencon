import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
`;

export const Table = styled.table`
  background-color: white;
  color: white;
  border-radius: 20px;
  border-collapse: collapse;
  text-align: center;
  margin: 2%;

  @media screen and (min-width: 1024px) {
    background-color: #141721;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  color: #141721;
  text-align: center;
  font-weight: bold;
`;
