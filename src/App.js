import * as React from "react";
import { Route, Router } from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';
import history from "./history";
import Pages from "./routes/Pages";
import { Header, Footer, NavBar, ErrorBoundary } from "./components";
import './App.css'
import { connect } from "react-redux";
import { checkAuthentication } from "./redux/Auth/actions";
import { getUsers } from "./redux/Users/actions";
import { Preloader } from "./components/common";


const App = ({checkAuthenticationConnect, isAuth, getUsers}) => {

    React.useEffect(() => {
        checkAuthenticationConnect();
    }, [checkAuthenticationConnect]);

    React.useEffect(() => {
        getUsers();
    }, [getUsers]);

    const content = isAuth !== null ? <Route component={Pages}/> : <Preloader/>;

    return <Router history={history}>
        <LastLocationProvider>
            <div className="App">
                <div className="app-wrapper">
                    <Header/>
                    <ErrorBoundary>
                        <NavBar/>
                        <main>
                            {content}
                        </main>
                    </ErrorBoundary>
                    <Footer/>
                </div>
            </div>
        </LastLocationProvider>
    </Router>
};


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    users: state.users,
    state: state
});
const mapDispatchToProps = {
    checkAuthenticationConnect: checkAuthentication,
    getUsers: getUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);