import React from 'react';
import PropTypes from 'prop-types';
import  './LeftPanel.styles.scss';
import { useDispatch } from "react-redux"
import {toogleMenu} from "../../../../store/actions" 
const LeftPanel = (props) => {
  const dispatch = useDispatch()
  const handleClick = () => { 
    dispatch(toogleMenu());
  }
  return (
    <div className="leftPanel">
      <div onClick={handleClick} className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="logo">WorkTracker</div>
    </div>
  );
 }

LeftPanel.propTypes = {
  // bla: PropTypes.string,
};

LeftPanel.defaultProps = {
  // bla: 'test',
};

export default LeftPanel;
