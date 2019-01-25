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
    this.keyPress = this.keyPress.bind(this);
    this.handleNewPlaylist = this.handleNewPlaylist.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  handleNewPlaylist(index) {
    const { createPlaylist, toggleCreatePL } = this.props;

    createPlaylist(this.state.input);
    this.setState({ input: "" });
    toggleCreatePL(index);
  }
  keyPress(e, index) {
    if (e.keyCode === 13) {
      this.handleNewPlaylist(index);
    }
  }

  render() {
    const { toggleCreatePL, index } = this.props;

    return (
      <React.Fragment>
        <CreatePLInput
          type="text"
          placeholder="Enter playlist name"
          onChange={this.handleChange}
          value={this.state.input}
          onKeyDown={e => this.keyPress(e, index)}
        />
        <div>
          <button onClick={() => this.handleNewPlaylist(index)}>Add</button>
          <button onClick={() => toggleCreatePL(index)}>Cancel</button>
        </div>
      </React.Fragment>
    );
  }
}
