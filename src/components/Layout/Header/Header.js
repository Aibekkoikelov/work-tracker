import React from 'react';
import PropTypes from 'prop-types';
import './Header.styles.scss';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Header = (props) => (
  <div className="HeaderWrapper">
    <LeftPanel />
    <RightPanel />
  </div>
);

Header.propTypes = {
  bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
