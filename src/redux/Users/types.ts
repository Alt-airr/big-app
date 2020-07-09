import { SET_USERS, SET_IS_FETCHING, DELETE_USER, TOGGLE_FOLLOW_USER } from "../../constants";


export interface ISetUsers {
    type: typeof SET_USERS;
    payload: Object;
}

export interface ISetIsFetching {
    type: typeof SET_IS_FETCHING;
    payload: boolean;
}

export interface IDeleteUser {
    type: typeof DELETE_USER;
    payload: string
}

export interface IToggleFollowUser {
    type: typeof TOGGLE_FOLLOW_USER;
    payload: string
}

export interface ICurrent {
    users: any,
    isFetching: boolean
}
