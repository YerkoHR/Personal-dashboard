import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fetchDataVideo } from "../../redux/ducks/fetchVideos";

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
  div {
    display: flex;
    flex-direction: row;
  }
`;
// CHANGE THIS STYLE
const StyledSearchBtn = styled.button`
  background: ${props => props.theme.font};
  border: 2px solid ${props => props.theme.font};
  outline: 0;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

export class SearchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  keyPress(e) {
    if (e.keyCode === 13) {
      this.props.fetchDataVideo(this.state.input);
    }
  }
  render() {
    const { fetchDataVideo } = this.props;

    return (
      <Container>
        <h1>Youtube API</h1>
        <div>
          <StyledInput
            type="text"
            placeholder="Search a video ..."
            onChange={this.handleChange}
            value={this.state.input}
            onKeyDown={this.keyPress}
          />
          <StyledSearchBtn onClick={() => fetchDataVideo(this.state.input)}>
            Search
          </StyledSearchBtn>
        </div>
      </Container>
    );
  }
}

SearchVideo.propTypes = {
  fetchDataVideo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {
    fetchDataVideo
  }
)(SearchVideo);
