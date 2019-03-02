import React from "react";
import styled from "styled-components";
import DeleteSaved from "../DeleteSaved";
import { H2, H3, P } from "../globals";
import Img from "react-image";

const StyledCard = styled.div`
  position: relative;
  z-index: 1;
  min-height: 380px;
  margin: 1.5em auto;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 10px;
  background: ${props => props.theme.backgroundCard};
  box-shadow: 0 0 0 1px ${props => props.theme.border};
  .card-spinner {
    display: flex;
    align-self: center;
    justify-content: center;
    width: 450px;
    margin: auto;
    img {
      height: 450px;
    }
  }
  .placeholder {
    width: 450px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("./placeholder.jpg");
  }
`;
const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2,
  h3 {
    margin: 0.2em 0.5em;
    border-bottom: 2px solid ${props => props.theme.backgroundSecundary};
  }
  .scrollBox {
    height: 250px;
    overflow: hidden;
    visibility: hidden;
    transition: 0.2s ease-in;
  }
  p,
  .scrollBox:hover {
    visibility: visible;
    overflow: auto;
  }
  .scrollBox:focus {
    outline: 0;
  }
`;
const ContainerBtn = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  svg {
    transition: 0.5s ease-in-out;
    stroke: #fff;
  }
`;
export const SaveDeleteBtn = styled.button`
  padding: 0.5em 1em;
  background: ${props => props.theme.ternary};
  border-radius: 10px;
  color: ${props => props.theme.P};
  border: 2px solid ${props => props.theme.border};
  outline: 0;
  transition: 0.3s ease-in-out;
`;

const PAligned = styled(P)`
  width: 80%;
  text-align: center;
  margin: 20px auto;
`;

export default class DetailsCard extends React.Component {
  render() {
    const { data, saved, addItem, removeItem } = this.props;
    return (
      <React.Fragment>
        <StyledCard className="fade-in">
          <div className="card-spinner">
            <Img
              src={[data.coverImage.extraLarge]}
              loader={<div className="lds-dual-ring spinner" />}
            />
          </div>
          <ContainerInfo>
            <H2>{data.title.romaji}</H2>
            <H3>
              Average Score:{" "}
              {data.averageScore ? data.averageScore : " Data not available"}
            </H3>
            <div className="scrollBox" tabIndex="0">
              <PAligned
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
            <ContainerBtn>
              {saved.some(item => item.id === data.id) ? (
                <DeleteSaved
                  removeItem={removeItem}
                  saved={saved}
                  data={data}
                  svg={false}
                />
              ) : (
                <SaveDeleteBtn
                  className="btn-save"
                  onClick={() => addItem(data)}
                >
                  Add to your list
                </SaveDeleteBtn>
              )}
            </ContainerBtn>
          </ContainerInfo>
        </StyledCard>
      </React.Fragment>
    );
  }
}
