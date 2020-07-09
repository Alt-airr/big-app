import { AUTHENTICATE, UNAUTHENTICATE } from "../../constants";


export interface IAuthenticate {
    type: typeof AUTHENTICATE;
}

export interface IUnauthenticate {
    type: typeof UNAUTHENTICATE;
}

export interface ICurrent {
    isAuth: boolean | null;
    uuid: string | null;
}