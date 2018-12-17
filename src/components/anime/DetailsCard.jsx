import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Index";

const StyledCard = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 3px;
  min-height: 380px;
  margin: 1.5em auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: ${props => props.theme.backgroundCard};
  box-shadow: 0 0 0 1px ${props => props.theme.backgroundCard};
  h3,
  span {
    margin-top: 0.5em;
    width: 100%;
    border-bottom: 2px solid ${props => props.theme.backgroundSecundary};
  }
  div {
    display: flex;
    flex-direction: column;
  }
  .description {
    width: 350px;
    text-align: justify;
    margin: 20px;
    font-size: 0.85em;
  }
  img {
    height: 450px;
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export default function DetailsCard({ data, saved, addItem, removeItem }) {
  return (
    <StyledCard>
      <img src={data.coverImage.extraLarge} alt="coverImage" />
      <div>
        <h3>{data.title.romaji}</h3>
        <span>
          Avg Score:
          {data.averageScore ? data.averageScore : " Data not available"}
        </span>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        {saved.some(item => item.id === data.id) ? (
          <StyledButton
            onClick={() => removeItem(saved.map(x => x.id).indexOf(data.id))}
          >
            Delete from your list
          </StyledButton>
        ) : (
          <StyledButton onClick={() => addItem(data)}>
            Add to your list
          </StyledButton>
        )}
      </div>
    </StyledCard>
  );
}
