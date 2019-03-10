import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import { saveGift } from '../actions/protected-data';

export class GiftSaveForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(saveGift(this.props.giftId, values.list))
            .then(res => this.props.history.push('/lists'))  
    };

    render() {
        const options = this.props.lists.map((option, index) => (
            <option key={index} value={this.props.lists[index]._id}>{this.props.lists[index].title}</option>
        ));
        console.log(this.props.lists)

        return (
            <form action="saveGift" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <Field name="list" component="select">
                    <option key='blank' value='' />
                    {options}
                </Field>
                <input className='submit' type="submit" value="Save to List" />
            </form>
        );
    };
};

export default reduxForm({
    form: 'saveGift',
    onSubmitFail: (errors, dispatch) => dispatch(focus('saveGift', 'username'))
})(GiftSaveForm);