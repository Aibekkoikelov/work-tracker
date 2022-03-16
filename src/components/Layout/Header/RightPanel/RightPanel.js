import React from 'react';
import PropTypes from 'prop-types';
import  './RightPanel.styles.scss';
import UserInfo from './UserInfo';
import Toolbar from './Toolbar';

const RightPanel = (props) => (
  <div className="RightPanelWrapper">
    <UserInfo />
    <Toolbar />
  </div>
);

RightPanel.propTypes = {
  // bla: PropTypes.string,
};

RightPanel.defaultProps = {
  // bla: 'test',
};

export default RightPanel;
