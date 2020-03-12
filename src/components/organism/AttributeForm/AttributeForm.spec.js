import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ToastProvider } from 'react-toast-notifications';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AttributeForm from '.';
import * as AttributeTypes from '../../../global/constants';

describe('AttributeForm component', () => {
  it('renders correctly for a client', () => {
    const wrapper = render(<ToastProvider><AttributeForm formType={AttributeTypes.Client} /></ToastProvider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly for a Tech Stack', () => {
    const wrapper = render(<ToastProvider><AttributeForm formType={AttributeTypes.TechStack}/></ToastProvider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly for an ANDi', () => {
    const wrapper = render(<ToastProvider><AttributeForm formType={AttributeTypes.ANDi}/></ToastProvider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('executes the correct strategy for creation of a client', () => {
    const Mock = new MockAdapter(axios);
  
    const responseObject = {
      new_client: [
        { 
          clientid: 1,
        }
      ]
    }

    Mock.onPost().reply(201, responseObject);

    const { getByText, getByPlaceholderText} = render(<ToastProvider><AttributeForm formType={AttributeTypes.Client}/></ToastProvider>);

    const nameInput = getByPlaceholderText(`${AttributeTypes.Client} Name`);
    const imageUrlInput = getByPlaceholderText(`${AttributeTypes.Client} Image URL`);
    const input = getByText('SUBMIT');

    expect(nameInput).toBeDefined();
    expect(imageUrlInput).toBeDefined();
    expect(input).toBeDefined();

    fireEvent.change(nameInput, { target: { value: 'Bean'}});
    fireEvent.change(imageUrlInput, { target: { value: 'bean.url'}})

    fireEvent.click(input);
  });

  it('executes the correct strategy for creation of an andi', () => {
    const Mock = new MockAdapter(axios);
  
    const responseObject = {
      new_andi: [
        { 
          andiid: 1,
        }
      ]
    }

    Mock.onPost().reply(201, responseObject);

    const { getByText, getByPlaceholderText} = render(<ToastProvider><AttributeForm formType={AttributeTypes.ANDi}/></ToastProvider>);

    const nameInput = getByPlaceholderText(`${AttributeTypes.ANDi} Name`);
    const imageUrlInput = getByPlaceholderText(`${AttributeTypes.ANDi} Image URL`);
    const input = getByText('SUBMIT');

    expect(nameInput).toBeDefined();
    expect(imageUrlInput).toBeDefined();
    expect(input).toBeDefined();

    fireEvent.change(nameInput, { target: { value: 'Bean'}});
    fireEvent.change(imageUrlInput, { target: { value: 'bean.url'}})

    fireEvent.click(input);
  });

  it('executes the correct strategy for creation of an andi', () => {
    const Mock = new MockAdapter(axios);
  
    const responseObject = {
      new_tech: [
        { 
          technologyid: 1,
        }
      ]
    }

    Mock.onPost().reply(201, responseObject);

    const { getByText, getByPlaceholderText} = render(<ToastProvider><AttributeForm formType={AttributeTypes.TechStack}/></ToastProvider>);

    const nameInput = getByPlaceholderText(`${AttributeTypes.TechStack} Name`);
    const imageUrlInput = getByPlaceholderText(`${AttributeTypes.TechStack} Image URL`);
    const input = getByText('SUBMIT');

    expect(nameInput).toBeDefined();
    expect(imageUrlInput).toBeDefined();
    expect(input).toBeDefined();

    fireEvent.change(nameInput, { target: { value: 'Bean'}});
    fireEvent.change(imageUrlInput, { target: { value: 'bean.url'}})

    fireEvent.click(input);
  });

  it('errors when creation of attribute fails', () => {
    const Mock = new MockAdapter(axios);
  
    Mock.onPost().networkError();

    const { getByText, getByPlaceholderText} = render(<ToastProvider><AttributeForm formType={AttributeTypes.TechStack}/></ToastProvider>);

    const nameInput = getByPlaceholderText(`${AttributeTypes.TechStack} Name`);
    const imageUrlInput = getByPlaceholderText(`${AttributeTypes.TechStack} Image URL`);
    const input = getByText('SUBMIT');

    expect(nameInput).toBeDefined();
    expect(imageUrlInput).toBeDefined();
    expect(input).toBeDefined();

    fireEvent.change(nameInput, { target: { value: 'Bean'}});
    fireEvent.change(imageUrlInput, { target: { value: 'bean.url'}})

    fireEvent.click(input);
  });
});
