import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const ModalBackgroundBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const ModalOverlay = styled(ModalBackgroundBase)`
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalWrapper = styled(ModalBackgroundBase)`
  z-index: 40;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ModalElement = styled.div`
  position: relative;
  width: 90%;
  background-color: white;
  padding: 16px 8px;
  border-radius: 20px;
  max-width: 600px;
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  color: black;
  top: 10px;
  right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

