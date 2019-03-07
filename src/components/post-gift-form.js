import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';

import Input from './input';
import { postGift } from '../actions/protected-data';
import { clickGift } from '../actions/click-gift';

export class PostGiftForm extends React.Component {
    onSubmit(values) {
        let giftId;
        const optionsArray = this.props.lists.reduce((acc, val, index) => {
            acc.push(this.props.lists[index].title)
            return acc
        }, []);
        return this.props.dispatch(postGift(values))
            .then(gift => {
                giftId = gift._id
                this.props.dispatch(clickGift(gift, optionsArray))
            })
            .then((res => this.props.history.push(`/giftinfo/${giftId}`)
            ))
    };

    render() {
        return <div>
            <form action="postGift" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <label htmlFor="name">Gift Name: </label>
                <Field
                    component={Input}
                    type="text"
                    name="name" />
                <label htmlFor="price">Price Range:</label><br />
                <Field name="price" component="select">
                    <option value=""></option>
                    <option value="$0 - $20">$0 - $20</option>
                    <option value="$20 - $50">$20 - $50</option>
                    <option value="$50 - $100">$50 - $100</option>
                    <option value="$100 - $250">$100 - $250</option>
                    <option value="$250 - $500">$250 - $500</option>
                    <option value="$500 - $1000">$500 - $1000</option>
                    <option value="$1000+">$1000+</option>
                </Field> <br />
                <label htmlFor="holiday">Suggested Holiday:</label> <br />
                <Field name="holiday" component="select">
                    <option value=""></option>
                    <option value="Christmas/Hanukkah">Christmas/Hanukkah</option>
                    <option value="Valentine's Day">Valentine's Day</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Easter">Easter</option>
                    <option value="Father's/Mother's Day">Father's/Mother's Day</option>
                    <option value="Spontaneous!">Spontaneous!</option>
                </Field><br />
                <label htmlFor="recipient">Suggested Recipient:</label><br />
                <Field name="recipient" component="select">
                    <option value=""></option>
                    <option value="Boyfriend/Husband">Boyfriend/Husband</option>
                    <option value="Girlfriend/Wife">Girlfriend/Wife</option>
                    <option value="Brother/Sister">Brother/Sister</option>
                    <option value="Father/Mother">Father/Mother</option>
                    <option value="Friend">Friend</option>
                    <option value="Grandfather/Grandmother">Grandfather/Grandmother</option>
                    <option value="Pet">Pet</option>
                </Field><br />
                <label htmlFor="description">Description: </label>
                <Field
                    component={Input}
                    type="text"
                    name="description"
                    required />
                <label htmlFor="link">Suggested Link: </label>
                <Field
                    component={Input}
                    type="text"
                    name="link"
                    required />
                <label htmlFor="image">Image Link: </label>
                <Field
                    component={Input}
                    type="text"
                    name="image"
                    required />
                <input type="submit" value="Submit Gift" />
            </form>
        </div>
    }
}

const mapStateToProps = state => ({
    lists: state.protectedData.data.lists
});

const smartPostGiftForm = connect(mapStateToProps)(PostGiftForm);

export default reduxForm({
    form: "postGift",
    onSubmitFail: (errors, dispatch) => {
        dispatch(focus('postGift', Object.keys(errors)[0]));
    }
})(smartPostGiftForm);