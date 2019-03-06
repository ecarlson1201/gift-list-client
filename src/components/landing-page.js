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
            <h3>Gift List is an online gift idea database that allows users to search for
                gift ideas submitted by other users. <br /> Users can save ideas to lists for different
                people in their lives. </h3>
            <LoginForm />
            <Link to="/register">Create an Account</Link>
        </div>
    );
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);