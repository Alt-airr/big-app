import React from 'react'
import { NavLink } from "react-router-dom";
import './NotFound.css';
import { withLastLocation } from 'react-router-last-location';

 const NotFound = ({ lastLocation }) => {

    const pathBack = lastLocation ? lastLocation.pathname : '/';

    return <div className='not_found'>
        <NavLink exact to={pathBack} className='btn'>
            Back
        </NavLink>
        <div className='msg'>Page not found</div>
    </div>};

export default withLastLocation(NotFound);

