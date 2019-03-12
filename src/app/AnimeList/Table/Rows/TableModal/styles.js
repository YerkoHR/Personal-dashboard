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
    text-align: center;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${props => props.theme.P};
    width: 500px;
  }
  .open-modal:hover {
    stroke: ${props => props.theme.blue};
  }
`;
