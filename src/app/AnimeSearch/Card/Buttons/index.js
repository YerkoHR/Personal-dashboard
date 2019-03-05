import React from "react";
import { connect } from "react-redux";
import ToggleDeleteAnime from "../../../../shared/ToggleDeleteAnime";
import { addItem } from "../../../../redux/ducks/saved";

import { Pocket } from "react-feather";
import { ContainerBtn } from "./styles";

const Buttons = ({ saved, data, addItem }) => {
  const saveOrdelete = saved.some(anime => anime.id === data.id);

  return (
    <ContainerBtn>
      {saveOrdelete ? (
        <ToggleDeleteAnime saved={saved} data={data} />
      ) : (
        <Pocket className="btn-save" onClick={() => addItem(data)} />
      )}
    </ContainerBtn>
  );
};

const mapStateToProps = state => ({
  saved: state.saved
});

export default connect(
  mapStateToProps,
  { addItem }
)(Buttons);
