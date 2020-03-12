import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ProjectForm from '.';

// eslint-disable-next-line no-unused-vars
let Mock;

describe('ProjectForm component', () => {
  beforeEach(() => {
    Mock = new MockAdapter(axios);
  })
  it('renders correctly', () => {
    const wrapper = render(<ProjectForm><div>A Form!</div></ProjectForm>);
    expect(wrapper).toMatchSnapshot();
  });
});
