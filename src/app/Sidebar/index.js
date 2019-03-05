import React from "react";
import PropTypes from "prop-types";

import { SideBarContainer, SideBarList } from "./styles";

const SideBar = ({ sideBar, loadComponent }) => (
  <SideBarContainer>
    <h2>Dashboard</h2>
    <SideBarList>
      {sideBar.items.map(item => (
        <li key={item.title} onClick={() => loadComponent(item.title)}>
          {item.icon}
          <div className="sidebar-title">{item.title}</div>
        </li>
      ))}
    </SideBarList>
  </SideBarContainer>
);

SideBar.propTypes = {
  loadComponent: PropTypes.func.isRequired,
  sideBar: PropTypes.shape({
    active: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)
  })
};

export default SideBar;
