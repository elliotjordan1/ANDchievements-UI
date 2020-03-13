import React from 'react';
import { render, fireEvent, act, wait } from '@testing-library/react';
import { ToastProvider } from 'react-toast-notifications';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AttributeForm from '.';
import * as AttributeTypes from '../../../global/constants';

describe('AttributeForm component', () => {
  it('renders correctly for a client', () => {
    const onAdd = jest.fn();
    const wrapper = render(<ToastProvider><AttributeForm formType={AttributeTypes.Client} onAdd={onAdd} /></ToastProvider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly for a Tech Stack', () => {
    const onAdd = jest.fn();
    const wrapper = render(<ToastProvider><AttributeForm formType={AttributeTypes.TechStack} onAdd={onAdd}/></ToastProvider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly for an ANDi', () => {
    const onAdd = jest.fn();
    const wrapper = render(<ToastProvider><AttributeForm formType={AttributeTypes.ANDi} onAdd={onAdd}/></ToastProvider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('executes the correct strategy for creation of a client', async () => {
    await act(async () => {
      const onAdd = jest.fn();
      const Mock = new MockAdapter(axios);
    
      const responseObject = {
        new_client: [
          { 
            clientid: 1,
          }
        ]
      }

      Mock.onPost().reply(201, responseObject);

      const { getByText, getByPlaceholderText} = render(<ToastProvider><AttributeForm formType={AttributeTypes.Client} onAdd = {onAdd}/></ToastProvider>);

      const nameInput = getByPlaceholderText(`${AttributeTypes.Client} Name`);
      const imageUrlInput = getByPlaceholderText(`${AttributeTypes.Client} Image URL`);
      const input = getByText(`Create New ${AttributeTypes.Client}`);

      expect(nameInput).toBeDefined();
      expect(imageUrlInput).toBeDefined();
      expect(input).toBeDefined();
      expect(onAdd).toHaveBeenCalledTimes(0);

      fireEvent.change(nameInput, { target: { value: 'Bean'}});
      fireEvent.change(imageUrlInput, { target: { value: 'bean.url'}})

      fireEvent.click(input);

      await wait(() => expect(onAdd).toHaveBeenCalledTimes(1));
    });
  });

  it('executes the correct strategy for creation of an andi', async () => {
    await act(async () => {
      const onAdd = jest.fn();
      const Mock = new MockAdapter(axios);

      const responseObject = {
        new_andi: [
          { 
            andiid: 1,
          }
        ]
      }

      Mock.onPost().reply(201, responseObject);

      const { getByText, getByPlaceholderText} = await render(<ToastProvider><AttributeForm formType={AttributeTypes.ANDi} onAdd={onAdd}/></ToastProvider>);

      const nameInput = getByPlaceholderText(`${AttributeTypes.ANDi} Name`);
      const imageUrlInput = getByPlaceholderText(`${AttributeTypes.ANDi} Image URL`);
      const input = getByText(`Create New ${AttributeTypes.ANDi}`);

      expect(nameInput).toBeDefined();
      expect(imageUrlInput).toBeDefined();
      expect(input).toBeDefined();
      expect(onAdd).toHaveBeenCalledTimes(0);

      fireEvent.change(nameInput, { target: { value: 'Bean'}});
      fireEvent.change(imageUrlInput, { target: { value: 'bean.url'}})

      fireEvent.click(input);

      await wait(() => expect(onAdd).toHaveBeenCalledTimes(1));
    });
  });

  it('executes the correct strategy for creation of an andi', async () => {
    await act(async () => {
      const onAdd = jest.fn();
      const Mock = new MockAdapter(axios);
    
      const responseObject = {
        new_tech: [
          { 
            technologyid: 1,
          }
        ]
      }

      Mock.onPost().reply(201, responseObject);

      const { getByText, getByPlaceholderText} = await render(<ToastProvider><AttributeForm formType={AttributeTypes.TechStack} onAdd={onAdd}/></ToastProvider>);

      const nameInput = getByPlaceholderText(`${AttributeTypes.TechStack} Name`);
      const imageUrlInput = getByPlaceholderText(`${AttributeTypes.TechStack} Image URL`);
      const input = getByText(`Create New ${AttributeTypes.TechStack}`);

      expect(nameInput).toBeDefined();
      expect(imageUrlInput).toBeDefined();
      expect(input).toBeDefined();
      expect(onAdd).toHaveBeenCalledTimes(0);

      fireEvent.change(nameInput, { target: { value: 'Bean'}});
      fireEvent.change(imageUrlInput, { target: { value: 'bean.url'}})

      fireEvent.click(input);

      await wait(() => expect(onAdd).toHaveBeenCalledTimes(1));
    });
  });

  it('errors when creation of attribute fails', async () => {
    await act(async () => {
      const onAdd = jest.fn();
      const Mock = new MockAdapter(axios);
    
      Mock.onPost().networkError();

      const { getByText, getByPlaceholderText} = await render(<ToastProvider><AttributeForm formType={AttributeTypes.TechStack} onAdd={onAdd}/></ToastProvider>);

      const nameInput = getByPlaceholderText(`${AttributeTypes.TechStack} Name`);
      const imageUrlInput = getByPlaceholderText(`${AttributeTypes.TechStack} Image URL`);
      const input =  getByText(`Create New ${AttributeTypes.TechStack}`);

      expect(nameInput).toBeDefined();
      expect(imageUrlInput).toBeDefined();
      expect(input).toBeDefined();
      expect(onAdd).toHaveBeenCalledTimes(0);

      fireEvent.change(nameInput, { target: { value: 'Bean'}});
      fireEvent.change(imageUrlInput, { target: { value: 'bean.url'}})

      fireEvent.click(input);

      await wait(() => expect(onAdd).toHaveBeenCalledTimes(0));
    });
  });
});
