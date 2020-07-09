import { Action, ActionCreator, Dispatch } from 'redux';
import { SET_USERS, SET_IS_FETCHING, DELETE_USER, TOGGLE_FOLLOW_USER } from "../../constants";
import { ISetUsers, ISetIsFetching, IDeleteUser, IToggleFollowUser } from "./types";
import { GET_USERS_API } from "../../constants/API-constan";
import { v4 as uuidv4 } from "uuid";
import { ThunkAction } from 'redux-thunk';
import { TAppState } from '../store/store';
import { TUser } from "../../typings/types";
import {SHOW_BY_NAME_REQUEST, TOGGLE_SHOW_FOLLOWS} from "../../constants/action-constants";

export function setUsers(fetchedUsers: Array<Object>): ISetUsers {
    return {
        type: SET_USERS,
        payload: fetchedUsers
    };
}

export const deleteUser = ( userID: string ) : any => {
    return {
        type: DELETE_USER,
        payload: userID
    }
};

export const toggleFollowUser = ( userID: string ) : any => {
    return {
        type: TOGGLE_FOLLOW_USER,
        payload: userID
    }
};

export function setIsFetching(isFetching: boolean): ISetIsFetching {
    return {
        type: SET_IS_FETCHING,
        payload: isFetching
    }
};

export type TUsersAction = ISetIsFetching | ISetUsers | IDeleteUser | IToggleFollowUser;
type DispatchType = Dispatch<TUsersAction>

const extendUsers = (users: Array<TUser>) => {
    const usersExtracted = users.map((u: TUser) => {
        u.id = uuidv4();
        u.followed = false;
        return u
    });
    return usersExtracted
};

export const getUsers: ActionCreator<
    ThunkAction<Promise<Action>, TAppState, void, Action>
    > = () =>  {
    return async (dispatch: DispatchType): Promise<any> => {
        dispatch( setIsFetching(true)) ;
        try {
            const response: any = await fetch(GET_USERS_API);
            const fetchedData = await response.json();
            if (response.ok)  {
                const extendedUsers = extendUsers(fetchedData.results);
                dispatch( setUsers(extendedUsers) )}
                dispatch( setIsFetching(false) )
        } catch (e) {
            console.log('error : ', e)
        }
    }
};





