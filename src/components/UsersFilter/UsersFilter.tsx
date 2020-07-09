import React, {useEffect, useState} from "react";
import {TUser} from "../../typings/types";
import s from './UserFilter.module.css'
import {TextInput} from "../common/TextInput/TextInput";

export const UsersFilter = (props: IProps) => {
    const {users, setFilteredUsers} = props;
    const [inputValue, setInputValue] = useState('');
    const placeholder = 'Start typing user name...';
    const label = 'User search';
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        const filterResults = users.filter(u => u.name.first.toLowerCase().includes(inputValue));
        setFilteredUsers(filterResults)
    }, [inputValue, users])

    return (
        <div className={s.filterBlock}>
           <TextInput value={inputValue} changeHandler={handleChange} placeholder={placeholder} label={label}/>
        </div>
    )
}

interface IProps {
    users : Array<TUser>,
    setFilteredUsers: any
}