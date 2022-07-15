import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon, ModalOverlay, ModalElement, ModalWrapper } from "./Modal.styles";

type Props = {
  isShowing: boolean;
  onClose: () => void;
  username: string;
  id: number;
  index:number;
};

const Modal = ({ isShowing, onClose, username, id, index }: Props) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay>
            <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
              <ModalElement>
                  <p>O username do usuário é {username}</p>
                  <p>O id do usuário é {id} e sua posição é {index}</p>
                <CloseIcon onClick={onClose} />
              </ModalElement>
            </ModalWrapper>
          </ModalOverlay>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
