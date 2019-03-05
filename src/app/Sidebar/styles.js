import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;

  margin: 2rem auto;
  h2 {
    text-align: center;
    width: 100%;
    margin-bottom: 4rem;
  }
`;

export const SideBarList = styled.div`
  svg {
    width: 24px;
    height: auto;

    stroke: ${props => props.theme.P};

    transition: 0.6s ease-in-out;
  }
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: fit-content;

    padding: 1em 0;

    transition: 0.3s ease-in;
    .sidebar-title {
      margin-left: 0.8em;
      font-size: 0.85em;
      cursor: pointer;
    }
    &:hover {
      opacity: 0.6;
    }
  }
`;
