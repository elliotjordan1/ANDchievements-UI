import React from 'react';
import PropTypes from 'prop-types';
import { 
  InputContainer,
  FormInput,
  FormLabel
} from '../../atom';

const ProjectDescriptionInputs = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched
}) => (
  <>
    <FormLabel>Project Description</FormLabel>
      <InputContainer>
        <FormInput
          type="text"
          name="clientDescription"
          maxLength={60}
          placeholder='Client Description'
          hiddenBorder
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.clientDescription}
        />
        <FormInput
          type='text'
          name='projectDescription'
          maxLength={60}
          placeholder='Project Description'
          hiddenBorder
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.projectDescription}
        />
        <FormInput
          type='text'
          name='projectOutcomes'
          maxLength={60}
          hiddenBorder
          placeholder='Project Outcomes'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.projectOutcomes}
        />
      </InputContainer>
    {errors.projectDescription && 
      (touched.projectDescription && 
      touched.projectOutcomes && 
      touched.clientDescription) && 
    errors.projectDescription}
  </>
);

ProjectDescriptionInputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.any).isRequired,
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
  touched: PropTypes.objectOf(PropTypes.any).isRequired
};

export default ProjectDescriptionInputs;