import React from 'react';
import PropTypes from 'prop-types';
import { SummaryBox, ProjectName, ClientName, TextWrapper } from './styles';

const ProjectSummary = ({ projectName, projectClient, projectImageURL }) => {
  return (
    <SummaryBox image={projectImageURL}>
      <TextWrapper>
        <ClientName>{projectClient}</ClientName>
        <ProjectName>{projectName}</ProjectName>
      </TextWrapper>
    </SummaryBox>
  );
};

ProjectSummary.propTypes = {
  projectImageURL: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectClient: PropTypes.string.isRequired
};

export default ProjectSummary;
