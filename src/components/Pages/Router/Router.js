import React from 'react';
import PropTypes from 'prop-types';
import './Router.styles.scss';
import ProjectPage from "../ProjectPage";
import TeamPage from '../TeamPage';

const Router = (props) => (
  <div className="RouterWrapper">
    <ProjectPage />
    <TeamPage />
  </div>
);

Router.propTypes = {
  // bla: PropTypes.string,
};

Router.defaultProps = {
  // bla: 'test',
};

export default Router;
