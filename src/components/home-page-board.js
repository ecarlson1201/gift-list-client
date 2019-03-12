import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";

import NavBar from './nav-bar';
import SearchForm from './search-form';
import { fetchCarouselData } from '../actions/carousel';
import { fetchSearchData, displaySearchParams, fetchProtectedData } from '../actions/protected-data';
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
            .then(() => this.props.dispatch(fetchProtectedData()))
    };

    handleClickOne(values) {
        this.props.dispatch(fetchSearchData({ holiday: values }))
            .then(res => this.props.dispatch(displaySearchParams({ holiday: values })))
    };

    handleClickTwo(values) {
        this.props.dispatch(fetchSearchData({ recipient: values }))
            .then(res => this.props.dispatch(displaySearchParams({ recipient: values })))
    };

    render() {
        if (this.props.loggedOut) {
            return <Redirect to="/" />
        };

        const holidayList = this.props.carouselOne.gifts.slice(0, 4).map((list, index) => (
            <li className='carouselLi' key={index}>
                <GiftPreview index={index} {...list} buttons={false} />
            </li>
        ));
        const recipientList = this.props.carouselTwo.gifts.slice(0, 4).map((list, index) => (
            <li className='carouselLi' key={index}>
                <GiftPreview index={index} {...list} buttons={false} />
            </li>
        ));
        return <div>
            <NavBar />
            <h1>Welcome to Gift List!</h1>
            <h2>Search for Gifts</h2>
            <SearchForm history={this.props.history} />
            <div>
                <Link className='transition' to='/search'>
                    <h3 onClick={() => this.handleClickOne(this.props.carouselOne.search)}>
                        Browse {this.props.carouselOne.search} Gifts
                </h3>
                </Link>
                <ul>
                    {holidayList}
                </ul>
            </div>
            <div>
                <Link className='transition' to='/search'>
                    <h3 onClick={() => this.handleClickTwo(this.props.carouselTwo.search)}>
                        Browse Gifts For Your {this.props.carouselTwo.search}
                    </h3>
                </Link>
                <ul>
                    {recipientList}
                </ul>
            </div>
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