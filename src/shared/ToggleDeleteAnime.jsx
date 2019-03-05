import React, { useState } from "react";
import DeleteAnime from "./DeleteAnime";
import { Trash2 } from "react-feather";

const ToggleDeleteAnime = ({ saved, data }) => {
  const [show, handleShow] = useState(false);

  const toggleShow = bool => handleShow(bool);

  const indexToDelete = saved.map(anime => anime.id).indexOf(data.id);

  return (
    <>
      {show ? (
        <DeleteAnime toggleShow={toggleShow} indexToDelete={indexToDelete} />
      ) : (
        <Trash2 className="btn-delete" onClick={() => toggleShow(true)} />
      )}
    </>
  );
};

export default ToggleDeleteAnime;
