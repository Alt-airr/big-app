import * as React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { About, Home, Landing, LogIn, LogOut, NotFound, Users, UserPage } from "../pages";

const Pages = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Landing} />
            <Route path="/about" exact={true} component={About} />
            <Route path="/log-in" exact={true} component={LogIn} />
            <Route path="/users" exact={true} component={Users} />
            <Route path="/users:id" component={UserPage} />
            <PrivateRoute path="/log-out" exact={true} component={LogOut} />
            <PrivateRoute path="/home" exact={true} component={Home} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Pages;