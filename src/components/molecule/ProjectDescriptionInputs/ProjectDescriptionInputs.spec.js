import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Component from '.';

describe('ProjectDescriptionInputs', () => {
  it('renders successfully with base component', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();

    const values = {
      projectDescription: '',
      projetOutcomes: '',
      clientDescription: ''
    }

    const errors = {};

    const touched = {};

    const component = render(<Component
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={values}
      errors={errors}
      touched={touched} />);

    expect(component).toMatchSnapshot();
  });
  it('renders successfully with errored FormLabels', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();

    const values = {
      projectDescription: '',
      projetOutcomes: '',
      clientDescription: ''
    }

    const errors = {
      projectDescription: true
    };

    const touched = {
      projectDescription: true,
      projectOutcomes: true,
      clientDescription: true
    };

    const component = render(<Component
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={values}
      errors={errors}
      touched={touched} />);

    expect(component).toMatchSnapshot();
  });
  it('successfully fires onChange handler when text is changed', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();

    const values = {
      projectDescription: '',
      projetOutcomes: '',
      clientDescription: ''
    }

    const errors = {};

    const touched = {};

    const { getByPlaceholderText } = render(<Component
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={values}
      errors={errors}
      touched={touched} />);

    const clientDescription = getByPlaceholderText('Client Description');
    const projectDescription = getByPlaceholderText('Project Description');
    const projectOutcomes = getByPlaceholderText('Project Outcomes');

    expect(handleChange).toHaveBeenCalledTimes(0);

    fireEvent.change(clientDescription, { target: { value: 'Test Text' }});
    fireEvent.change(projectDescription, { target: { value: 'Project Outcome' }});
    fireEvent.change(projectOutcomes, { target: { value: 'Outcome' }});

    expect(handleChange).toHaveBeenCalledTimes(3);
  })
})