import React from 'react';
import { connect } from 'react-redux';

export default function LandingPage() {
    return <div>
        <h1>Welcome to Gift List!</h1>
        <h3>Gift List is an online gift idea database that allows users to search for
                gift ideas submitted by other users. <br /> Users can save ideas to lists for different
                people in their lives. </h3>
        <button>Login</button>
        <button>Sign Up</button>
    </div>
}