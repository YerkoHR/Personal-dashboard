import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchDataVideo } from "../../redux/ducks/fetchVideos";
import ContainerSearch from "../../shared/ContainerSearch";
import { Input, H1 } from "../../shared/globals";

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
      this.setState({ input: "" });
    }
  }
  render() {
    return (
      <ContainerSearch>
        <H1>Youtube API</H1>
        <div>
          <Input
            type="text"
            placeholder="Search a video ..."
            onChange={this.handleChange}
            value={this.state.input}
            onKeyDown={this.keyPress}
          />
        </div>
      </ContainerSearch>
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
