import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import styled from "styled-components";
import { addItem, removeItem } from "../../redux/ducks/saved";

const LoadableDetailsCard = Loadable({
  loader: () => import("./DetailsCard"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadableSearchSection = Loadable({
  loader: () => import("./SearchSection"),
  loading: () => null
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Index = ({ animeDetails, saved, addItem, removeItem }) => (
  <Container className="fade-in">
    <LoadableSearchSection />
    {animeDetails && (
      <LoadableDetailsCard
        data={animeDetails}
        saved={saved}
        addItem={addItem}
        removeItem={removeItem}
      />
    )}
  </Container>
);

Index.propTypes = {
  animeDetails: PropTypes.object
};

const mapStateToProps = state => ({
  animeDetails: state.animeDetails,
  saved: state.saved
});

export default connect(
  mapStateToProps,
  {
    addItem,
    removeItem
  }
)(Index);
