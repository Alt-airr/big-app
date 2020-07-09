import React from 'react';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import { MaterialButton } from "../MaterialButton/MaterialButton";

interface IModalProps {
    text: string,
    onConfirm: any,
    btnOpen: string
}

export const ModalAlert = (props: IModalProps) => {
    const [open, setOpen] = React.useState(false);
    const {text, onConfirm, btnOpen} = props;
    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    return (
        <div>
            <MaterialButton clickHandler={handleClickOpen} name={btnOpen} variant="outlined"/>
            <Dialog
                open={ open }
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    { text }
                </DialogTitle>
                <DialogActions>
                    <MaterialButton clickHandler={handleClose} name={'Cancel'} variant="outlined"/>
                    <MaterialButton clickHandler={onConfirm} name={'Confirm'} variant="outlined"/>
                </DialogActions>
            </Dialog>
        </div>
    );
}