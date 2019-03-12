import styled from "styled-components";

export const TableModalContainer = styled.div`
  .modal-edit {
    position: absolute;
    right: 20px;
    bottom: 20px;
    &:hover {
      stroke: ${props => props.theme.blue};
    }
  }
  input {
    border: 0;
    outline: 0;
    background: transparent;
    color: ${props => props.theme.P};
  }
  .open-modal:hover {
    stroke: ${props => props.theme.blue};
  }
`;
