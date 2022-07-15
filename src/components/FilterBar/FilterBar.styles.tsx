import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  width: 80%;
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
  border: 2px solid #141721;
  transition: all ease 0.3s;
  color: #141721;
  text-align: center;
  font-size: 16px;

  &::placeholder {
    color: #141721;
    font-weight: bold;
    font-size: 16px;
    
  }

  &:hover,
  &:focus {
    background-color: #141721;
    transform: scale(1.05);
    color: white;

    &::placeholder {
      color: white;
    }
  }

`;
