import React from 'react';
import { connect } from 'react-redux';

import LoginSignupForm from './login-signup-form';

export default function LoginPage() {
    return <div>
        <h3>Log into your account!</h3>
        <LoginSignupForm />
    </div>
}