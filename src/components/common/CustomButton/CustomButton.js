import React from "react";
import './CustomButton.css';

export const CustomButton = ({ title, onClick }) => (
    <button className='btn first' onClick={onClick}>
        {title}
    </button>
);