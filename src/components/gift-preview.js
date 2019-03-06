import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './gift-preview.css'

import { clickGift } from '../actions/click-gift';

export class GiftPreview extends React.Component {
    handleClick(clickedObject) {
        const optionsArray = this.props.lists.reduce((acc, val, index) => {
            acc.push(this.props.lists[index].title)
            return acc
        }, []);
        this.props.dispatch(clickGift(clickedObject, optionsArray))
    };

    render() {
        return (
            <Link to={`/giftinfo/${this.props._id}`}>
                <div id={this.props._id} onClick={() => this.handleClick(this.props)}>
                    <img src={this.props.image} alt="gift-preview" /> <br />
                    Gift Name: {this.props.name}<br />
                    Price Range: {this.props.price}<br />
                    Suggested Holiday: {this.props.holiday} <br />
                </div>
            </Link>
        )
    };
};

const mapStateToProps = state => ({
    lists: state.protectedData.data.lists
});

export default connect(mapStateToProps)(GiftPreview);