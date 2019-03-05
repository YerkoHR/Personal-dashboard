import React from "react";
import { connect } from "react-redux";
import { CheckCircle, XCircle } from "react-feather";
import { removeItem } from "../redux/ducks/saved";
const DeleteAnime = ({ removeItem, toggleShow, indexToDelete }) => {
  return (
    <>
      <CheckCircle
        className="btn-delete"
        onClick={() => removeItem(indexToDelete)}
      />
      <XCircle className="btn-save" onClick={() => toggleShow(false)} />
    </>
  );
};

export default connect(
  null,
  { removeItem }
)(DeleteAnime);
