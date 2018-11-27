import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5em 1.2em;
  background: ${props => props.theme.backgroundPrimary};
  border-color: transparent;
  border-radius: 2px;
  color: ${props => props.theme.font};
  &:focus {
    outline: 0px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1em 4em;
`;

export class SearchVideo extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const {} = this.props;

    return (
      <Container>
        <h1>Youtube API</h1>
        <div>
          <StyledInput
            type="text"
            placeholder="Search an anime ..."
            onChange={this.handleChange}
            value={this.state.input}
          />
        </div>
      </Container>
    );
  }
}

SearchVideo.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(SearchVideo);
