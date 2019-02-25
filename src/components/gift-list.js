import React from 'react';
import { connect } from 'react-redux';

import GiftPreview from './gift-preview';

export function GiftList(props) {
    const gifts = props.gifts.map((gift, index) => (
        <li key={index}>
            <GiftPreview {...gift} />
        </li>
    ));

    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {gifts}
            </ul>
        </div>
    )
};

export default connect()(GiftList);