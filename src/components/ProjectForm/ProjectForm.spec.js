import React from 'react';
import { render } from '@testing-library/react';
import ProjectForm from './ProjectForm';

describe('ProjectForm component', () => {
  it('renders correctly', () => {
    const wrapper = render(<ProjectForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
