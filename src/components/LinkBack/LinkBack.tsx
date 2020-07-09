import React from "react";
import s from './LinkBack.module.css';
import { Link } from "react-router-dom";
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp';
import { withLastLocation } from "react-router-last-location";


const LinkBack = ({ lastLocation } : any) => {
   const pathBack = lastLocation !== null ? lastLocation.pathname : '/';
   return <Link to={pathBack} className={`${s.linkBack} .btn`}>
       <NavigateBeforeSharpIcon/> Back
   </Link>;
};

export default withLastLocation(LinkBack);
