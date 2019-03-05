import React from 'react';
import {connect} from 'react-redux';

export default function LoginSignupForm() {
    return <form>
        Username: <input type="text"/> <br/>
        Password: <input type="text"/> <br/>
        <input type="submit" value="Enter"/>
    </form>
}