import { ICurrent } from "./types";
import { AUTHENTICATE, UNAUTHENTICATE } from "../../constants";
import { TAuthAction } from "./actions";


const initialState = {
    uuid: null,
    isAuth: false,
};

export function authReducer(
    state: ICurrent = initialState,
    action: TAuthAction,
) : ICurrent {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state, uuid: "placeholder-uuid", isAuth: true
            };
        case UNAUTHENTICATE:
            return { uuid: null, isAuth: false }
    }
    return state;
}