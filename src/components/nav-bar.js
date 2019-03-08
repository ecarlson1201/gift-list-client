import React from 'react';

import { Link } from 'react-router-dom';

import './nav-bar.css'
import { clearAuthToken } from '../local-storage';
import { clearAuth } from '../actions/auth'
import { connect } from 'react-redux';

export class NavBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    };

    render() {
        return (
            <nav>
                <Link to="/homepage">Home</Link>
                <Link to="/lists">My Lists</Link>
                <Link to="/postgift">Post Gift</Link>
                <Link to="/" onClick={() => this.logOut()}>Logout</Link>
            </nav>
        )

    }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);