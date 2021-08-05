import React from 'react';
import {FormControl, InputLabel, MenuItem, Select as MuiSelect} from '@material-ui/core';
export default function Select({label,name,value,onChange,size,options}){
    return(
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            name={name}
            label={label}
            onChange={onChange}
            value={value}
            size={size || 'small'}
            >
                <MenuItem value=''>none</MenuItem>
                {
                    options.map(option=>(
                        <MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>
                    ))
                }
            </MuiSelect>
        </FormControl>
    )
}