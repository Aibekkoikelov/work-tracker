import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar'
//import { Test } from './Layout.styles';

const Layout = (props) => (
  <div className="LayoutWrapper">
    <Header />
    <Sidebar />
  </div>
);

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
