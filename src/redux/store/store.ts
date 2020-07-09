import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "../Auth/reducer";
import { usersReducer } from "../Users/reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer
});

export type TAppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    return createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    )}