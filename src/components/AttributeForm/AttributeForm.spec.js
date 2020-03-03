import React from 'react';
import { render } from '@testing-library/react';
import AttributeForm from './AttributeForm';
import * as AttributeTypes from '../../global/constants';

describe('AttributeForm component', () => {
  it('renders correctly for a client', () => {
    const wrapper = render(<AttributeForm formType={AttributeTypes.Client} close ={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly for a Tech Stack', () => {
    const wrapper = render(<AttributeForm formType={AttributeTypes.TechStack} close = {() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly for an ANDi', () => {
    const wrapper = render(<AttributeForm formType={AttributeTypes.ANDi} close = {() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
