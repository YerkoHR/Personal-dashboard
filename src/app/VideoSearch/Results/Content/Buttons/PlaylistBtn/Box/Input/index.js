import React, { useState } from "react";

import { CreatePLInput } from "./styles";

const Input = ({ toggleCreatePL, index, createPlaylist }) => {
  const [input, onInput] = useState("");

  const handleNewPlaylist = index => {
    createPlaylist(input);
    onInput("");
    toggleCreatePL(index);
  };
  const keyPress = (e, index) => {
    if (e.keyCode === 13) {
      handleNewPlaylist(index);
    }
  };
  return (
    <>
      <CreatePLInput
        type="text"
        placeholder="Enter playlist name"
        onChange={e => onInput(e.target.value)}
        value={input}
        onKeyDown={e => keyPress(e, index)}
      />
      <div>
        <button onClick={() => handleNewPlaylist(index)}>Add</button>
        <button onClick={() => toggleCreatePL(index)}>Cancel</button>
      </div>
    </>
  );
};

export default Input;
