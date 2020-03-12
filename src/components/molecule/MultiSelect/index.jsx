import { throttle } from 'lodash'
import React , {useState} from 'react';
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
  RemovalButton, 
  AddButton, 
} from '../../atom/MutliSelect';

const MultiSelect = ({ placeholder, optionList }) => {

    const [visible, setVisible] =  useState(false);
    const[selectedValues, setSelectedValues] = useState([]);
    const[options, setOptions] = useState(optionList);
    const[inputValue, setInputValue] = useState('');
    const timeout = 1000;

    const filterOptionsByTerm = (term) => {
      return optionList
        .filter(option => !selectedValues.includes(option.value))
        .concat(selectedValues
        .filter(option => !optionList.includes(option.value)))
        .filter(option => option.value.toLowerCase().includes(term.toLowerCase()));
    }

    const handleChange = (event) => { 
        setInputValue(event.target.value);

        if(event.target.value.length){            
            const filteredOptions = filterOptionsByTerm(event.target.value)

            setOptions(filteredOptions);

            return setVisible(true)
        }
        
        return setVisible(false)
    }

    const handleClick = (value, index, event) => {
        event.preventDefault()
        setSelectedValues([...selectedValues, value]);
        options.splice(index, 1);
    }

    const removeSelection = (event, optionValue) => {
        event.preventDefault()        
        const index = selectedValues.indexOf(optionValue);
        if (index > -1) {
            setSelectedValues(selectedValues.filter((e)=>(e !== optionValue)))
            setOptions([...options, optionValue]);
        }
    }

    const add = (event) => {
        event.preventDefault()        
    }

    const handleMouseMoveThrottle = throttle(() => {
        setVisible(false);
        setInputValue('');
    }, timeout, { leading: false});

    const handleMouseMove = e => {
        handleMouseMoveThrottle(e)
    }

    return (  
        <MultiSelectWrapper onMouseLeave={handleMouseMove} > 
            <InputWrapper>
                {selectedValues.map((optionValue) => (
                    <SelectedOption>
                            {optionValue}
                        <RemovalButton buttonType="submit" onClick={(event) => removeSelection(event, optionValue)} labelText = "x" />
                    </SelectedOption>
                ))}
                <FormInput type='text' placeholder={placeholder} onChange={handleChange} value={inputValue} maxLength={40}/>
            </InputWrapper>

            <OptionsWrapper visible={visible} arrayLength={options && options.length}>
                {options && options.length > 0 && options.map((value, index) => {
                  return (
                  <Option key={value} onClick={(event) => handleClick(value, index, event)} value ={value}  /> 
                  );
                })         
                }       
                <AddButton buttonType="submit" onClick={(event) => add(event)} labelText = "+ Add" />
            </OptionsWrapper>
        </MultiSelectWrapper>
    )
};

MultiSelect.propTypes = {
  placeholder: PropTypes.string.isRequired,
  optionList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MultiSelect;
