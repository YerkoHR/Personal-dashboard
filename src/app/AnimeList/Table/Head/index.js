import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { orderAsc, orderDes } from "../../../../redux/ducks/saved";
import { ArrowDown, ArrowUp } from "react-feather";

import { HeadRow } from "./styles";

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
