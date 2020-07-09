import {TAppState} from '../redux/store/store';
import {RouteComponentProps} from "react-router";

export interface ICurrent {
    auth :{
        isAuth: boolean | null
    },
    users :{
        users: [],
    }
    uuid: string | null;
}


export type TUser = {
    name: {
        first: string,
        last: string
    },
    picture: {
        medium: string,
        large: string,
        thumbnail: string
    },
    login: {
        uuid: string
    },
    location: {
        city: string
    },
    dob: {
        "date": string,
        "age": number
    }
    phone: string,
    email: string,
    id: string,
    followed: boolean
}

export interface MatchProps extends RouteComponentProps<MatchParams> {
}
export interface MatchParams {
    id: string;
}

export interface ITableRow {
    name: string,
    value: string | number
}

export type TAppState_= TAppState;

export interface TLastLocation  {
    lastLocation : {hash: string,
    key: string
    pathname: string
    search: string
    state: any}
}