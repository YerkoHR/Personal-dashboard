import React, { Component } from "react";
import styled from "styled-components";

const StyledResetContainer = styled.div`
  margin: 0 auto;
  button {
    transition: 0.3s ease-in-out;
    border: 0;
    width: 100px;
    color: #fff;
    background: black;
  }
  .reset:hover {
    background: red;
  }
  .cancel:hover {
    background: blue;
  }
`;

export default class ResetStateBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBtn: false
    };
  }
  render() {
    return (
      <StyledResetContainer>
        {this.state.showBtn ? (
          <div>
            <p>
              If you reset the state your saved series are gone, are you sure ?
            </p>
            <button className="reset" onClick={() => this.props.resetState()}>
              YES
            </button>
            <button
              className="cancel"
              onClick={() => this.setState({ showBtn: false })}
            >
              NO
            </button>
          </div>
        ) : (
          <button
            className="reset"
            onClick={() => this.setState({ showBtn: true })}
          >
            RESET STATE
          </button>
        )}
      </StyledResetContainer>
    );
  }
}
