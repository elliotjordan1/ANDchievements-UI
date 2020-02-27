import React , {useState} from 'react';
import { Input, MultiSelectWrapper, Options, OptionsWrapper, InputWrapper, SelectedOption, RemovalButton, AddButton } from './styles';


const MultiSelect = ({ placeholder }) => {

    const [visible, setVisible] =  useState(false);
    const[selectedValues, setSelectedValues] = useState([]);
    const[options, setOptions] = useState([]);
    const optionList = ['JAI', 'HENRY', 'ELLIOT', 'DAMI', 'ILKAY', 'MIRA', 'MARTIN', 'NIRO'];
    const[temp, setTemp] = useState(0);

    if(options.length === 0 && temp ===0){
        setOptions(optionList);
        setTemp(1);
    }

    const handleChange = (event) => { 
        if(event.target.value.length){
            return setVisible(true)
        }
        return setVisible(false)
    }

    const handleClickOnInput = () => { 
            return setVisible(true)
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

    return (  
        <MultiSelectWrapper> 
            <InputWrapper>
                {selectedValues.map((optionValue) => (
                    <SelectedOption>
                            {optionValue}
                        <RemovalButton type="submit" onClick={(event) => removeSelection(event, optionValue)}>
                            x
                        </RemovalButton>
                    </SelectedOption>
                ))}
                <Input type='text' placeholder={placeholder} onChange={handleChange} onClick={handleClickOnInput} />
            </InputWrapper>

            <OptionsWrapper visible={visible} class="dropup" >
                {options.map((value, index) => (<Options key={value} onClick={(event) => handleClick(value, index, event)} >{value}</Options>))}
                <Options>
                    <AddButton type="submit" onClick={(event) => add(event)}>
                        + Add
                    </AddButton>
                </Options>
            </OptionsWrapper>
        </MultiSelectWrapper>
    )
};

export default MultiSelect;
