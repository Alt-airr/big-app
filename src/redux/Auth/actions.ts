import { ThunkDispatch as Dispatch } from "redux-thunk";
import {AUTHENTICATE, UNAUTHENTICATE} from "../../constants";
import {IAuthenticate, IUnauthenticate} from "./types";
import history from "../../history";


export function authenticate(): IAuthenticate {
    return {
        type: AUTHENTICATE,
    };
}

export function unauthenticate(): IUnauthenticate {
    return {
        type: UNAUTHENTICATE,
    };
}

export type TAuthAction = IAuthenticate | IUnauthenticate;

export function logIn() {
    return async (dispatch: Dispatch<TAuthAction, {}, any>) => {
        await window.localStorage.setItem("authenticated", "true");
        dispatch(authenticate());
        history.push('/home')
    };
}

export function logOut() {
    return async (dispatch: Dispatch<TAuthAction, {}, any>) => {
        await window.localStorage.setItem("authenticated", "false");
        dispatch(unauthenticate());
    };
}

export function checkAuthentication() {
    return async (dispatch: Dispatch<TAuthAction, {}, any>) => {
        const auth = await window.localStorage.getItem("authenticated");
        const formattedAuth = typeof auth === "string" ?
            JSON.parse(auth) :
            null;
        formattedAuth ? dispatch(authenticate()) : dispatch(unauthenticate());
    };
}