import React from "react";
import styled from "styled-components";
import { Content } from "./globals";

const Wrapper = styled(Content)`
  margin-top: 5em;
`;

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
