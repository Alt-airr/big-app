import * as React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css'
import { connect } from "react-redux";
import { ICurrent } from "../../typings/types";

interface IProps {
    isAuth: boolean | null
}

const NavBar = ({ isAuth }:IProps) => {
    const authButton = isAuth ?
        <NavLink to="/log-out">
        Log Out
    </NavLink> : <NavLink to="/log-in">
        Log in
    </NavLink>;

    return <nav className={s.navBar}>
        <ul>
            <li>
                <NavLink to="/">
                    Landing
                </NavLink>
            </li>
            <li>
                <NavLink to="/home">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/users">
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink to="/broken-link">
                    Broken link
                </NavLink>
            </li>
            <li>
                {authButton}
            </li>
        </ul>
    </nav>
};

const mapStateToProps = (state: ICurrent) => ({
    isAuth: state.auth.isAuth,
});
export default connect(
    mapStateToProps,
    null,
)(NavBar);