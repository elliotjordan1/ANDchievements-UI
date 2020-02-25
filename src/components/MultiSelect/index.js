/* eslint-disable react/prop-types */
import React , {useState} from 'react';
import { Input, MultiSelectWrapper, Options, OptionsWrapper } from './styles';


const MultiSelect = ({ placeholder, options }) => {

    const [visible, setVisible] =  useState(false);
    const handleChange = (event) => {        
        if(event.target.value.length){
            return setVisible(true)
        }
        return setVisible(false)
    }
    return (  
        <MultiSelectWrapper> 
            <Input type='text' placeholder={placeholder} onChange={handleChange} />
            <OptionsWrapper visible={visible}>
                {options.map((value) => (<Options>{value}</Options>))}
                <Options>Butoon</Options>
            </OptionsWrapper>
        </MultiSelectWrapper>
    )
};



export default MultiSelect;
