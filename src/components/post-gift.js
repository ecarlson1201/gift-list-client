import React from 'react';
import { connect } from 'react-redux';

import NavBar from './nav-bar';
import { Redirect } from 'react-router-dom';

import PostGiftForm from './post-gift-form';

export class PostGift extends React.Component {
    render() {
        if (this.props.loggedOut) {
            return <Redirect to="/" />
        };
        return <div>
            <NavBar />
            <h1>Post a Gift!</h1>
            <PostGiftForm history={this.props.history} />
        </div>
    }
}

const mapStateToProps = state => ({
    loggedOut: state.auth.currentUser === null
});

export default connect(mapStateToProps)(PostGift);