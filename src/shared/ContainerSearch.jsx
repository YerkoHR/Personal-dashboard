import React from "react";
import styled from "styled-components";
import { Content } from "./globals";

const Wrapper = styled(Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerSearch = ({ children }) => <Wrapper>{children}</Wrapper>;

export default ContainerSearch;
