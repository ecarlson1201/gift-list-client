import React from 'react';
import { connect } from 'react-redux';

import GiftSaveForm from './gift-save-form';
import NavBar from './nav-bar';

export function GiftInfo(props) {
    return <section>
        <NavBar />
        <img src={props.clicked.image} alt="gift" />
        <h3>Gift Name: </h3><span>{props.clicked.name}</span>
        <h3>Price Range: </h3><span>{props.clicked.price}</span>
        <h3>Suggested Holiday: </h3><span>{props.clicked.holiday}</span>
        <h3>Suggested Recipient: </h3><span>{props.clicked.recipient}</span>
        <h3>Description:</h3>
        <p>{props.clicked.description}
        </p>
        <a href={props.clicked.link} rel='noopener noreferrer' target='_blank' >Suggested Link</a>
        <GiftSaveForm giftId={props.clicked.id} history={props.history} lists={props.lists.data.lists}/>
    </section>
}

const mapPropsToState = state => ({
    clicked: state.clickGift,
    lists: state.protectedData
});

export default connect(mapPropsToState)(GiftInfo);