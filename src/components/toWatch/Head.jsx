import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import { orderAsc, orderDes } from "../../redux/ducks/saved";

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
      fill: blue;
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
          <svg
            onClick={() => orderAsc(head)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -4.5 24 24"
            width="18"
            height="18"
          >
            <path d="M6 4.071l-3.95 3.95A1 1 0 0 1 .636 6.607L6.293.95a.997.997 0 0 1 1.414 0l5.657 5.657A1 1 0 0 1 11.95 8.02L8 4.07v9.586a1 1 0 1 1-2 0V4.07z" />
          </svg>
          <svg
            onClick={() => orderDes(head)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -4.5 24 24"
            width="20"
            height="18"
          >
            <path d="M8 11.243l3.95-3.95a1 1 0 1 1 1.414 1.414l-5.657 5.657a.997.997 0 0 1-1.414 0L.636 8.707A1 1 0 1 1 2.05 7.293L6 11.243V1.657a1 1 0 1 1 2 0v9.586z" />
          </svg>
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
