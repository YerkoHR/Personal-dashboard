import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  h3,
  input {
    margin-right: 0.5rem;
  }
  svg {
    transition: 0.3s ease-in;
  }
  .edit:hover {
    opacity: 0.5;
  }
`;
