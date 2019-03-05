import React from 'react';
import { connect } from 'react-redux';

import LoginSignupForm from './login-signup-form';

export default function SignUpPage() {
    return <div>
        <h3>Create Your Account!</h3>
        <LoginSignupForm />
    </div>
}