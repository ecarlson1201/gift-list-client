import React from 'react';
import { connect } from 'react-redux';

import GiftSaveForm from './gift-save-form';

export function GiftInfo(props) {
    return <section>
        <h2>Gift Name: {props.clicked.name}</h2>
        <h3>Price Range: {props.clicked.name}</h3>
        <h3>Suggested Holiday: {props.clicked.name}</h3>
        <h3>Suggested Recipient: {props.clicked.name}</h3>
        <h3>Description:</h3>
        <p>{props.clicked.name}
        </p><br />
        <h3>Suggested Link: {props.clicked.name}</h3>
        <GiftSaveForm/>
    </section>
}

const mapPropsToState = state => ({
    clicked: state.clicked
});

export default connect(mapPropsToState)(GiftInfo);