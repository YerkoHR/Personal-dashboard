import React, { useState } from "react";

import { CheckCircle, XCircle, Edit2 } from "react-feather";
import { Input } from "../../../../../../shared/globals";
import { TitleContainer } from "./styles";

const EditTitle = ({ editPlaylistTitle, playlistKey }) => {
  const [show, onShow] = useState(false);
  const [newTitle, onNewTitle] = useState("");

  const HandleInput = title => onNewTitle(title);
  const keyPress = e => {
    if (e.keyCode === 13) {
      editPlaylistTitle(newTitle, playlistKey);
      onShow(false);
    }
  };
  return (
    <TitleContainer>
      {show ? (
        <>
          <Input
            value={newTitle}
            onChange={e => HandleInput(e.target.value)}
            onKeyDown={keyPress}
            placeholder="Enter new title..."
          />
          <div>
            <CheckCircle
              className="btn-save"
              onClick={() => editPlaylistTitle(newTitle, playlistKey)}
            />
            <XCircle className="btn-delete" onClick={() => onShow(false)} />
          </div>
        </>
      ) : (
        <>
          <h3>{playlistKey}</h3>
          <Edit2 className="edit" onClick={() => onShow(true)} />
        </>
      )}
    </TitleContainer>
  );
};

export default EditTitle;
