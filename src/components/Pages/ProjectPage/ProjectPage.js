import React from 'react';
import PropTypes from 'prop-types';
import './ProjectPage.styles.scss';

const ProjectPage = (props) => {

  const showModal = () => {
    
  }
  return (
    <div className="project">
      <div className="project__header">
        <h1 className="project__header-title">Project</h1>
        <div onClick={showModal} className="project__header-btn">CREATE NEW PROJECT</div>
      </div>
      
    </div>
  );
} 

ProjectPage.propTypes = {
  // bla: PropTypes.string,
};

ProjectPage.defaultProps = {
  // bla: 'test',
};

export default ProjectPage;
