import React from "react";
import noAvatar from '../../assets/img/deleted.png';
type TPhoto = {
   photo: {
    large? : string,
    medium? : string,
    thumbnail? : string
   }
}

export const UserPhoto = ({ photo }:TPhoto) =>  <img src={photo.large || photo.thumbnail  || noAvatar} alt='userPhoto'/>;






