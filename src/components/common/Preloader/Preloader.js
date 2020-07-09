import React from 'react'
import './Preloader.css'

export const Preloader = () => (
    <div className='preloader'>
        <div className='msg'>Wait a second, please...</div>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);