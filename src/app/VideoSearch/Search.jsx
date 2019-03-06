import React, { useState } from "react";
import PropTypes from "prop-types";

import ContainerSearch from "../../shared/ContainerSearch";
import { Input, H1 } from "../../shared/globals";

const Search = ({ fetchDataVideo }) => {
  const [input, onInput] = useState("");

  const keyPress = e => {
    if (e.keyCode === 13) {
      fetchDataVideo(input);
      onInput("");
    }
  };

  return (
    <ContainerSearch>
      <H1>Youtube API</H1>
      <div>
        <Input
          type="text"
          placeholder="Search a video ..."
          onChange={e => onInput(e.target.value)}
          value={input}
          onKeyDown={keyPress}
        />
      </div>
    </ContainerSearch>
  );
};

Search.propTypes = {
  fetchDataVideo: PropTypes.func.isRequired
};

export default Search;
