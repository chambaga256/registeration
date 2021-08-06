import React from 'react';
import {FormControl, InputLabel, MenuItem, Select as MuiSelect} from '@material-ui/core';
export default function Select({label,name,value,onChange,size,InternshipCourses}){
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
                    InternshipCourses.map(InternshipCourse=>(
                        <MenuItem key={InternshipCourse.id} value={InternshipCourse.title}>{InternshipCourse.title}</MenuItem>
                    ))
                }
            </MuiSelect>
        </FormControl>
    )
}