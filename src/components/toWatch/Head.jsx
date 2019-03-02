import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import { orderAsc, orderDes } from "../../redux/ducks/saved";
import { ArrowDown, ArrowUp } from "react-feather";

const HeadRow = styled.tr`
  th:nth-child(1) {
    width: 20%;
  }

  th:nth-child(2) {
    width: 10%;
  }

  th:nth-child(3) {
    width: 20%;
  }

  th:nth-child(4) {
    width: 15%;
  }
  th:nth-child(5) {
    width: 7%;
  }
  th:nth-child(6) {
    width: 7%;
  }
  th:nth-child(7) {
    width: 15%;
  }
  svg {
    transition: 0.3s ease-in-out;
    &:hover {
      stroke: ${props => props.theme.blue};
    }
  }
`;
const Heads = [
  "title",
  "format",
  "status",
  "source",
  "averageScore",
  "myScore",
  "myState"
];

const Head = ({ orderAsc, orderDes }) => (
  <HeadRow>
    {Heads.map(head => (
      <th key={`head-` + head}>
        <div>{head.toUpperCase()}</div>
        <div>
          <ArrowUp onClick={() => orderAsc(head)} />
          <ArrowDown onClick={() => orderDes(head)} />
        </div>
      </th>
    ))}
  </HeadRow>
);

Head.propTypes = {
  orderAsc: PropTypes.func.isRequired,
  orderDes: PropTypes.func.isRequired
};

export default connect(
  null,
  { orderAsc, orderDes }
)(Head);
