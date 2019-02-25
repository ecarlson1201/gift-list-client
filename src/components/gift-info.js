import React from 'react';
import { GiftSaveForm } from './gift-save-form';

export default function GiftInfo(props) {
    return <section>
        <h2>Gift Name: </h2>
        <h3>Price Range: </h3>
        <h3>Suggested Holiday: </h3>
        <h3>Suggested Recipient: </h3>
        <h3>Description:</h3>
        <p>
        </p><br />
        <h3>Suggested Link: </h3>
        <GiftSaveForm />
    </section>
}