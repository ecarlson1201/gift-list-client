import React from 'react';
import { connect } from 'react-redux';

import {Redirect} from "react-router-dom";
import GiftList from './gift-list';
import NavBar from './nav-bar';

export class HomePageBoard extends React.Component {
    render() {
        if (this.props.loggedOut) {
            return <Redirect to="/" />
        };
        const lists = this.props.carousel.map((list, index) => (
            <li key={index}>
                <h3>Browse {this.props.carousel[index].title} Gifts</h3>
                <GiftList index={index} {...list} buttons={false} />
            </li>
        ));
        return <div>
            <NavBar />
            <h1>Welcome to Gift List!</h1>
            <ul>
                {lists}
            </ul>
        </div>
    };
};

const mapStateToProps = state => ({
    carousel: state.carousel.data,
    loggedOut: state.auth.currentUser === null
});

export default connect(mapStateToProps)(HomePageBoard);