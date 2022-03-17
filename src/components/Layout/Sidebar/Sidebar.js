import React from 'react';
import PropTypes from 'prop-types';
import ArticleIcon from "@mui/icons-material/Article";import './Sidebar.styles.scss';
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import StyleIcon from "@mui/icons-material/Style";
import SettingsIcon from "@mui/icons-material/Settings";
const Sidebar = (props) => {

  
  return (
    <aside className="SidebarWrapper">
      <div className="SidebarWrapper__label">Manage</div>
      <ul className="SidebarWrapper__list">
        <li className="SidebarWrapper__list-item">
          <ArticleIcon />
          <a href="#" className="SidebarWrapper__list-item-link">
            <span>PROJECTS</span>
          </a>
        </li>
        <li className="SidebarWrapper__list-item">
          <PeopleIcon />
          <a href="#" className="SidebarWrapper__list-item-link">
            <span>TEAM</span>
          </a>
        </li>
        <li className="SidebarWrapper__list-item">
          <PersonIcon />
          <a href="#" className="SidebarWrapper__list-item-link">
            <span>CLIENT</span>
          </a>
        </li>
        <li className="SidebarWrapper__list-item">
          <StyleIcon />
          <a href="#" className="SidebarWrapper__list-item-link">
            <span>TAGS</span>
          </a>
        </li>
        <li className="SidebarWrapper__list-item">
          <ArticleIcon />
          <a href="#" className="SidebarWrapper__list-item-link">
            <span>SETTINGS</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
Sidebar.propTypes = {
  // bla: PropTypes.string,
};

Sidebar.defaultProps = {
  // bla: 'test',
};

export default Sidebar;
