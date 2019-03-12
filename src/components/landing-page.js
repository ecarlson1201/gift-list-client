import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/homepage" />
    };

    return (
        <div>
            <h1>Welcome to Gift List!</h1>
            <h3>Gift List is an online gift idea database that allows you to brainstorm gifts for people in your life by searching for
                gift ideas submitted by other users and saving them to your lists. </h3>
            <h3>Demo Account:</h3>
            <p>Username: user <br />
                Password: password</p>
            <LoginForm />
            <Link to="/register">Create an Account</Link>
        </div>
    );
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);