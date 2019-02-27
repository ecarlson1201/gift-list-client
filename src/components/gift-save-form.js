import React from 'react';
import { connect } from 'react-redux';

import { saveGift } from '../actions';

export class GiftSaveForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        const savedGift = { ...this.props.clicked }
        delete savedGift.options
        this.props.dispatch(saveGift(event.currentTarget.listOptions.value, savedGift))
        console.log(this.props.lists)
    };

    render() {
        const options = this.props.clicked.options.map((option, index) => (
            <option key={index}>{option}</option>
        ));

        return <form action="save" onSubmit={this.onSubmit}>
            <select name="listOptions">
                {options}
            </select>
            <input type="submit" value="Save to List" />
        </form>;
    };
};

const mapStateToProps = state => ({
    clicked: state.clicked,
    lists: state.lists
});

export default connect(mapStateToProps)(GiftSaveForm);