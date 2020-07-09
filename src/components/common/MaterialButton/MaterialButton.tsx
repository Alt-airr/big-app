import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

interface IProps {
    clickHandler : any,
    name: string,
    variant?: 'contained' | 'outlined' | 'text'
}

export const MaterialButton = ( props: IProps ) => {
    const { clickHandler, name, variant } = props;
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <Button variant={ variant }
                    color="primary"
                    onClick={ clickHandler }
                    fullWidth={ true } >
                { name }
            </Button>
        </div>
    )
}


const useStyles = makeStyles(() => ({
    root: {
            width: '100%',
            marginTop: '10px',
            justifyContent: 'center'
    }
}));