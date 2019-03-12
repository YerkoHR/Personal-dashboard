import React from "react";
import styled from "styled-components";

import { BtnTable } from "./buttons";
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  padding: 100px;
  .modal {
    position: relative;
    background: ${props => props.theme.backgroundSecundary};
    border-radius: 5px;
    width: 80%;
    margin: 0 auto;
    padding: 50px;
  }
  .modal-close {
    position: absolute;
    left: 20px;
    bottom: 20px;
    transition: 0.3s ease;
    &:hover {
      opacity: 0.5;
    }
  }
  .modal-content {
    font-size: 0.9rem;
    margin: 0 3rem;
  }
`;

const Modal = ({ onShow, children }) => {
  return (
    <Backdrop>
      <div className="modal">
        <div className="modal-content">{children}</div>

        <BtnTable className="modal-close" onClick={() => onShow(false)}>
          Close
        </BtnTable>
      </div>
    </Backdrop>
  );
};

export default Modal;
