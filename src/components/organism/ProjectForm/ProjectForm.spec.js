import React from 'react';
import { render } from '@testing-library/react';
import ProjectForm from '.';

describe('ProjectForm component', () => {
  it('renders correctly', () => {
    const wrapper = render(<ProjectForm><div>blah</div></ProjectForm>);
    expect(wrapper).toMatchSnapshot();
  });
});
