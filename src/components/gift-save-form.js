import React from 'react';
import { connect } from 'react-redux';

export function GiftSaveForm(props) {
    return <form action="save">
        <select name="gift-lists">
        </select>
        <input type="submit" value="Save to List" />
    </form>
}


export default connect()(GiftSaveForm)