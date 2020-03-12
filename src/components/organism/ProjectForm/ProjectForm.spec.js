import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ProjectForm from '.';

describe('ProjectForm component', () => {
  it('renders correctly', () => {
    const wrapper = render(<ProjectForm><div>A Form!</div></ProjectForm>);
    expect(wrapper).toMatchSnapshot();
  });
  it ('Correctly sets the form to ANDi input type', () => {
    const { getByText } = render(<ProjectForm><div>A Form!</div></ProjectForm>);

    const input = getByText('ANDis');

    fireEvent.click(input);

    const formTypeField = getByText('Add an ANDi');

    expect(formTypeField).toBeDefined();
  });
  it ('Correctly sets the form to Tech Stack input type', () => {
    const { getByText } = render(<ProjectForm><div>A Form!</div></ProjectForm>);

    const input = getByText('Tech Stacks');

    fireEvent.click(input);

    const formTypeField = getByText('Add a Tech Stack');

    expect(formTypeField).toBeDefined();
  })
  it ('Correctly sets the form to Client input type', () => {
    const { getByText } = render(<ProjectForm><div>A Form!</div></ProjectForm>);

    const input = getByText('Client');

    fireEvent.click(input);

    const formTypeField = getByText('Add a Client');

    expect(formTypeField).toBeDefined();
  })
  it ('Correctly sets the form to Client input type', () => {
    const Mock = new MockAdapter(axios);

    Mock.onGet().reply(200, { clients: [ 
      {
        clientid: 1,
        clientname: 'Terrances Terrirer'
      }
    ] });

    const { getByText } = render(<ProjectForm><div>A Form!</div></ProjectForm>);

    const input = getByText('Select client');

    fireEvent.click(input);

    expect(input).toBeDefined();
  })
});
