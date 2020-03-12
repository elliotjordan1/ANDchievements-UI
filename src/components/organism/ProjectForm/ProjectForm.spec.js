import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ProjectForm, { formValidator } from '.';

describe('ProjectForm component', () => {
  it('renders correctly', () => {
    const wrapper = render(<ProjectForm><div>A Form!</div></ProjectForm>);
    expect(wrapper).toMatchSnapshot();
  });
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
  });
  it('Correctly returns errors for validation', () => {
    const values = {};

    const actualResult = formValidator(values);

    const expectedResult = {
      projectTitle: 'Required',
      clientName: 'Required',
      projectDescription: 'Required',
      coverImageUrl: 'Required',
      andiNames: 'Required',
      techStackNames: 'Required'
    };

    expect(actualResult).toEqual(expectedResult);
  });
  it('Correctly returns errors for validation', () => {
    const values = {
      projectTitle: 'valid'
    };

    const actualResult = formValidator(values);

    const expectedResult = {
      clientName: 'Required',
      projectDescription: 'Required',
      coverImageUrl: 'Required',
      andiNames: 'Required',
      techStackNames: 'Required'
    };

    expect(actualResult).toEqual(expectedResult);
  });
  it('Correctly returns some errors for partially valid input', () => {
    const values = {
      projectTitle: 'valid',
      clientName: 'valid',
      clientId: 'id'
    };

    const actualResult = formValidator(values);

    const expectedResult = {
      projectDescription: 'Required',
      coverImageUrl: 'Required',
      andiNames: 'Required',
      techStackNames: 'Required'
    };

    expect(actualResult).toEqual(expectedResult);
  });
  it('Correctly returns no errors for enitrely valid input', () => {
    const values = {
      projectTitle: 'valid',
      clientName: 'valid',
      projectDescription: 'valid',
      projectOutcomes: 'valid',
      clientDescription: 'valid',
      clientId: [1],
      coverImageUrl: 'valid',
      andiIds: [1, 2],
      andiNames: 'valid',
      techStackIds: [1, 2],
      techStackNames: 'valid'
    };

    const actualResult = formValidator(values);

    const expectedResult = {};

    expect(actualResult).toEqual(expectedResult);
  });
});
