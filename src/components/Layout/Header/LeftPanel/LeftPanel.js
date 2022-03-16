import React from 'react';
import PropTypes from 'prop-types';
import  './LeftPanel.styles.scss';

const LeftPanel = (props) => (
  <div className="leftPanel">
    <div className="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="logo">
     WorkTracker
    </div>
  </div>
);

LeftPanel.propTypes = {
  // bla: PropTypes.string,
};

LeftPanel.defaultProps = {
  // bla: 'test',
};

export default LeftPanel;
