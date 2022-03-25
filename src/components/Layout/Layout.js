import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar'
import Router from '../Pages/Router'

import  './Layout.styles.scss';
import { useSelector } from "react-redux";
const Layout = (props) => {
  const toggle = useSelector(state => state.settings.activeSideBar);

  return (
    <div className={`LayoutWrapper ${toggle ? "fullSideBar" : null}`}>
        <Header />
        <Sidebar />
        <Router />
    </div>
  );
} 

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
