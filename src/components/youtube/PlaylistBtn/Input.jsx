import React from "react";
import styled from "styled-components";

const CreatePLInput = styled.input`
  border: 0;
  border-bottom: 1px solid #fff;
  outline: 0;
  width: 120px;
  background: transparent;
  align-self: center;
  color: #fff;
`;

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  render() {
    const { createPlaylist, toggleCreatePL, index } = this.props;

    return (
      <React.Fragment>
        <CreatePLInput
          type="text"
          placeholder="Enter playlist name"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <div>
          <button
            onClick={() => {
              createPlaylist(this.state.input);
              this.setState({ input: "" });
              toggleCreatePL(index);
            }}
          >
            Add
          </button>
          <button onClick={() => toggleCreatePL(index)}>Cancel</button>
        </div>
      </React.Fragment>
    );
  }
}
