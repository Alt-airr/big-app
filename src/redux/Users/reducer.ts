import { ICurrent } from "./types";
import { SET_IS_FETCHING, SET_USERS, DELETE_USER } from "../../constants";
import { TUsersAction } from "./actions";
import { TUser } from "../../typings/types";
import { deletedUser } from "../../constants/common-constants";
import { TOGGLE_FOLLOW_USER } from "../../constants/action-constants";


const initialState = {
    users: [],
    isFetching: false
};

export function usersReducer(
    state: ICurrent = initialState,
    action: TUsersAction,
) : ICurrent {
    switch (action.type) {
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.payload
            };
        case SET_USERS:
            return {  ...state, users: action.payload }

        case TOGGLE_FOLLOW_USER:
            const followTogledUsers = state.users.map((u : TUser) =>
                u.id === action.payload ? { ...u, followed: !u.followed } : u)
            return  {...state, users : followTogledUsers}

        case DELETE_USER:
            const usersAfterDeleting = state.users.map((u : TUser) =>
                u.id === action.payload ? {...deletedUser} : {...u})
            return  {...state, users : usersAfterDeleting}
    }
    return state;
}