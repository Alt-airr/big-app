import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { ICurrent } from "../typings/types";
import { connect } from "react-redux";

interface IProps {
    exact?: boolean;
    path: string;
    isAuth: boolean | null;
    component: React.ComponentType<any>;
}

const PrivateRoute = ({   component: Component,
                          isAuth,
                          ...otherProps
                      } : IProps) => {
    return (
            <Route
                render={otherProps => (
                    <>
                      { isAuth ? <Component {...otherProps}/> : <Redirect to='/log-in'/> }
                    </>
                )}
            />

    )
};

const mapStateToProps = ( state: ICurrent ) => ({
    isAuth: state.auth.isAuth
});
export default connect(
    mapStateToProps
)(PrivateRoute);