import React from "react";
import styled from "styled-components";
import DeleteSaved from "../DeleteSaved";
import { H2, H3, P } from "../globals";

const StyledCard = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 3px;
  min-height: 380px;
  margin: 1.5em auto;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: ${props => props.theme.backgroundCard};
  box-shadow: 0 0 0 1px ${props => props.theme.backgroundCard};
  img {
    height: 450px;
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
  background: #fff;
  padding: 0.5em 1em;
  color: #000;
  border: 2px solid #000;
  outline: 0;
  transition: 0.3s ease-in-out;
`;

const PAligned = styled(P)`
  width: 80%;
  text-align: center;
  margin: 20px auto;
`;

export default function DetailsCard({ data, saved, addItem, removeItem }) {
  return (
    <StyledCard className="fade-in">
      <img src={data.coverImage.extraLarge} alt="coverImage" />
      <ContainerInfo>
        <H2>{data.title.romaji}</H2>
        <H3>
          Average Score:{" "}
          {data.averageScore ? data.averageScore : " Data not available"}
        </H3>
        <PAligned dangerouslySetInnerHTML={{ __html: data.description }} />
        <ContainerBtn>
          {saved.some(item => item.id === data.id) ? (
            <DeleteSaved
              removeItem={removeItem}
              saved={saved}
              data={data}
              svg={false}
            />
          ) : (
            <SaveDeleteBtn className="btn-save" onClick={() => addItem(data)}>
              Add to your list
            </SaveDeleteBtn>
          )}
        </ContainerBtn>
      </ContainerInfo>
    </StyledCard>
  );
}
