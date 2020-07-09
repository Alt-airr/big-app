import React from 'react';
import Switch from '@material-ui/core/Switch';

interface ISwitchProps {
    checked : boolean,
    disable: boolean,
    onChange: () => void
}


export default function Switcher({checked, disable, onChange} : ISwitchProps) {



    return (
        <div>
            <Switch
                checked={checked}
                onChange={onChange}
                disabled={disable}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
    );
}