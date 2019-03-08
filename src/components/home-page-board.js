import React from 'react';
import { connect } from 'react-redux';

import { Redirect } from "react-router-dom";
import NavBar from './nav-bar';
import SearchForm from './search-form';
import { fetchCarouselData } from '../actions/carousel';
import GiftPreview from './gift-preview';

export class HomePageBoard extends React.Component {
    componentDidMount() {
        let search = {
            holiday: null,
            recipient: null
        };
        let holidayNum = Math.floor(Math.random() * 7);
        let recipNum = Math.floor(Math.random() * 8);

        this.props.holidays.forEach((val, index) => {
            if (index === holidayNum) {
                search.holiday = this.props.holidays[index];
            };
        });

        this.props.recipients.forEach((val, index) => {
            if (index === recipNum) {
                search.recipient = this.props.recipients[index];
            };
        });

        this.props.dispatch(fetchCarouselData(search))
    };

    render() {
        if (this.props.loggedOut) {
            return <Redirect to="/" />
        };

        const holidayList = this.props.carouselOne.gifts.map((list, index) => (
            <li key={index}>
                <GiftPreview index={index} {...list} buttons={false} />
            </li>
        ));
        const recipientList = this.props.carouselTwo.gifts.map((list, index) => (
            <li key={index}>
                <GiftPreview index={index} {...list} buttons={false} />
            </li>
        ));
        return <div>
            <NavBar />
            <h1>Welcome to Gift List!</h1>
            <h2>Search for Gifts</h2>
            <SearchForm history={this.props.history} />
            <h3>Browse {this.props.carouselOne.search} Gifts</h3>
            <ul>
                {holidayList}
            </ul>
            <h3>Browse Gifts For Your {this.props.carouselTwo.search}</h3>
            <ul>
                {recipientList}
            </ul>
        </div>
    };
};

const mapStateToProps = state => ({
    carouselOne: state.carousel.data.holiday,
    carouselTwo: state.carousel.data.recipient,
    holidays: state.carousel.holidays,
    recipients: state.carousel.recipients,
    loggedOut: state.auth.currentUser === null
});

export default connect(mapStateToProps)(HomePageBoard);