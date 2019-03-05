import React from 'react';
import { connect } from 'react-redux';

import GiftPreview from './gift-preview';
import { deleteGift } from '../actions/protected-data'

export class GiftList extends React.Component {
    deleteGift(event) {
        this.props.dispatch(deleteGift(this.props.title, parseInt(event.currentTarget.getAttribute('data-id'))));
    };

    render() {
        const gifts = this.props.gifts.map((gift, index) => (
            <li key={index}>
                <GiftPreview {...gift} />
                {this.props.buttons ? <button data-id={index} onClick={event => this.deleteGift(event)}>Delete</button>: ''}
            </li>
        ));

        return (
            <div>
                <ul>
                    {gifts}
                </ul>
            </div>
        );
    };
};

export default connect()(GiftList);