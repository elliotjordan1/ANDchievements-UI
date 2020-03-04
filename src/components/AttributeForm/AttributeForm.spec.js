import React from 'react';
import { render } from '@testing-library/react';
import { ToastProvider } from 'react-toast-notifications';
import AttributeForm from './AttributeForm';
import * as AttributeTypes from '../../global/constants';

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
});
