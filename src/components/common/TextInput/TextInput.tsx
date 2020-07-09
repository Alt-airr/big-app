import React from "react";
import { TextField, makeStyles } from '@material-ui/core';

export const TextInput = (props: IProps) => {
    const {changeHandler, placeholder, value, label} = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField value={value}
                       onChange={changeHandler}
                       placeholder={placeholder}
                       className={classes.input}
                       id="filter-input"
                       label={label}
                       variant="outlined"
            />
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
            width: '90%'
    },
    input: {
        width: '100%',
    }
}));

interface IProps {
    changeHandler : any,
    value: string,
    placeholder: string,
    label: string
}