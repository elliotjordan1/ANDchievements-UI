import { throttle } from 'lodash'
import React , {useState} from 'react';
import { 
  MultiSelectWrapper, 
  MultiSelectOptions as Option, 
  MultiSelectOptionsWrapper as OptionsWrapper, 
  InputWrapper, 
  SelectedOption, 
  RemovalButton, 
  AddButton , 
  FormInput 
} from '../../atom';


// eslint-disable-next-line react/prop-types
const MultiSelect = ({ placeholder }) => {

    const [visible, setVisible] =  useState(false);
    const[selectedValues, setSelectedValues] = useState([]);
    const optionList = ['JAI', 'HENRY', 'ELLIOT', 'DAMI', 'ILKAY', 'MIRA', 'MARTIN', 'NIRO', 'AUSER1', 'AUSER2', 'AUSER3', 'AUSER4'];
    const[options, setOptions] = useState(optionList);
    const[inputValue, setInputValue] = useState('');
    const timeout = 1000;

    const handleChange = (event) => { 
        setInputValue(event.target.value);
        if(event.target.value.length){            
            const filteredOptions = optionList
            .filter(x => !selectedValues.includes(x))
            .concat(selectedValues
            .filter(x => !optionList.includes(x)))
            .filter(op => op.toLowerCase().includes(event.target.value.toLowerCase()));

            setOptions( filteredOptions );            
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

            <OptionsWrapper visible={visible} arrayLength={options.length}>
                {options.length > 0 && options.map((value, index) => {
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

export default MultiSelect;
