import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ToggleDeleteAnime from "../../../../shared/ToggleDeleteAnime";
import { Pocket } from "react-feather";
import { addItem } from "../../../../redux/ducks/saved";

const ContainerBtn = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  svg {
    transition: 0.5s ease-in-out;
    stroke: #fff;
  }
`;

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
