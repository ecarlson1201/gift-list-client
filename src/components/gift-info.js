import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import GiftSaveForm from './gift-save-form';
import NavBar from './nav-bar';

export function GiftInfo(props) {
    return <div className='giftInfo'>
        <NavBar />
        <h1 id='giftInfoHeader'>Gift Info</h1>
        <GiftSaveForm giftId={props.clicked.id} history={props.history} lists={props.lists.data.lists}/>
        <img src={props.clicked.image} alt="gift" />
        <h3>Gift Name: </h3><span>{props.clicked.name}</span>
        <h3>Price Range: </h3><span>{props.clicked.price}</span>
        <h3>Suggested Holiday: </h3><span>{props.clicked.holiday}</span>
        <h3>Suggested Recipient: </h3><span>{props.clicked.recipient}</span>
        <h3>Description:</h3>
        <p>{props.clicked.description}
        </p>
        <h3>Suggested Link</h3><a className='giftLink' href={props.clicked.link} rel='noopener noreferrer' target='_blank' >{props.clicked.link}</a> <br/>
    </div>
}

const mapPropsToState = state => ({
    clicked: state.clickGift,
    lists: state.protectedData
});

export default connect(mapPropsToState)(GiftInfo);