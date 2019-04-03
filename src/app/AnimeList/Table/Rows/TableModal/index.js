import React, { useState } from "react";
import Modal from "../../../../../shared/Modal";

import { Clipboard, Edit2 } from "react-feather";
import { TableModalContainer } from "./styles";

const TableModal = ({ updateReason, id, reason }) => {
  const [show, onShow] = useState(false);
  const [showInput, onShowInput] = useState(false);
  const [input, onInput] = useState("");

  const reasonContent = reason || "Put the reason to drop here...";

  const keyPress = e => {
    if (e.keyCode === 13) {
      updateReason(input, id);
      onShowInput(false);
    }
  };

  return (
    <TableModalContainer>
      <Clipboard className="open-modal" onClick={() => onShow(true)} />

      {show && (
        <Modal onShow={onShow}>
          {showInput ? (
            <input
              autoFocus
              placeholder="Your reason..."
              onKeyDown={keyPress}
              onChange={e => onInput(e.target.value)}
            />
          ) : (
            <p>{reasonContent}</p>
          )}
          <Edit2 className="modal-edit" onClick={() => onShowInput(true)} />
        </Modal>
      )}
    </TableModalContainer>
  );
};

export default TableModal;
