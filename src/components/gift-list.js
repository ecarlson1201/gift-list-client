import React from 'react';
import { connect } from 'react-redux';

import GiftPreview from './gift-preview';
import { deleteGift, fetchProtectedData } from '../actions/protected-data'

export class GiftList extends React.Component {
    deleteGift(event) {
        let giftId = event.currentTarget.getAttribute('data-id')
        let listId = this.props.list
        return this.props.dispatch(deleteGift(giftId, listId))
        .then(() => { this.props.dispatch(fetchProtectedData()) });
    };

    render() {
        const gifts = this.props.gifts.map((gift, index) => (
            <li key={index}>
                <GiftPreview {...gift} />
                {this.props.buttons ? <button className='deleteGift' data-id={this.props.gifts[index]._id} onClick={event => this.deleteGift(event)}>X</button> : ''}
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