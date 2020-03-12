import React from 'react';
import PropTypes from 'prop-types';
import { 
  InputWrapper, 
  FormInput 
} from '../../atom';

import {
  MultiSelectWrapper, 
  MultiSelectOptions as Option, 
  MultiSelectOptionsWrapper as OptionsWrapper, 
  SelectedOption, 
  RemovalButton
} from '../../atom/MutliSelect';

const MultiSelect = ({ placeholder, optionList, onChange, onSelect, selectedValues, onRemove, name, value, visible }) => {
    return (  
        <MultiSelectWrapper> 
            <InputWrapper>
                {selectedValues && selectedValues.map((val) => (
                    <SelectedOption key ={val.andiId}>
                            {val.andiName}
                        <RemovalButton buttonType="submit" onClick={() => onRemove(val)} labelText = "x" />
                    </SelectedOption>
                ))}
                <FormInput type='text' placeholder={placeholder} onChange={onChange} value={value} maxLength={40} name={name} />
            </InputWrapper>
              
            {optionList && optionList.length > 0 && (
              <OptionsWrapper visible={visible} arrayLength={optionList && optionList.length}>
                  {optionList && optionList.map((givenValue) => {
                    return (
                      <Option key={givenValue.value} onClick={() => onSelect(givenValue)} value ={givenValue.label}  /> 
                    );
                  })         
                  }  
              </OptionsWrapper>
            )}
        </MultiSelectWrapper>
    )
};

MultiSelect.propTypes = {
  placeholder: PropTypes.string.isRequired,
  optionList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired
}

export default MultiSelect;
