import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { addGiftList } from '../actions/protected-data';

export class AddGiftListForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(addGiftList(values)).then(() => { this.props.reset() })
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values))}>
                <h3>New List: </h3>
                <Field
                    type="text"
                    component={Input}
                    name="title"
                    id="title"
                    placeholder="Name"
                    required
                ></Field>
                <input type="submit" value="Add List" />
            </form>
        );
    };
};


export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(AddGiftListForm);