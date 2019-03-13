import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { fetchSearchData, displaySearchParams } from '../actions/protected-data';

export class SearchForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(fetchSearchData(values))
            .then(res => this.props.dispatch(displaySearchParams(values)))
            .then((res => this.props.history.push('/search')
            ));
    };
    render() {
        return (
            <form role='search' action="searchGift" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <div className='search'>
                    <label htmlFor="price">Price Range:<br />
                        <Field name="price" component="select">
                            <option value=""></option>
                            <option value="$0 - $20">$0 - $20</option>
                            <option value="$20 - $50">$20 - $50</option>
                            <option value="$50 - $100">$50 - $100</option>
                            <option value="$100 - $250">$100 - $250</option>
                            <option value="$250 - $500">$250 - $500</option>
                            <option value="$500 - $1000">$500 - $1000</option>
                            <option value="$1000+">$1000+</option>
                        </Field>
                    </label>
                </div>
                <div className='search'>
                    <label htmlFor="holiday">Suggested Holiday:<br />
                        <Field name="holiday" component="select">
                            <option value=""></option>
                            <option value="Christmas/Hanukkah">Christmas/Hanukkah</option>
                            <option value="Valentine's Day">Valentine's Day</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Easter">Easter</option>
                            <option value="Father's/Mother's Day">Father's/Mother's Day</option>
                            <option value="Spontaneous">Spontaneous</option>
                        </Field>
                    </label>
                </div>
                <div className='search'>
                    <label htmlFor="recipient">Suggested Recipient:<br />
                        <Field name="recipient" component="select">
                            <option value=""></option>
                            <option value="Boyfriend/Husband">Boyfriend/Husband</option>
                            <option value="Girlfriend/Wife">Girlfriend/Wife</option>
                            <option value="Brother/Sister">Brother/Sister</option>
                            <option value="Father/Mother">Father/Mother</option>
                            <option value="Friend">Friend</option>
                            <option value="Grandfather/Grandmother">Grandfather/Grandmother</option>
                            <option value="Pet">Pet</option>
                            <option value="Son/Daughter">Son/Daughter</option>
                        </Field>
                    </label>
                </div>
                <input id='searchSubmit' className='submit' type="submit" value="Search" />
            </form>
        );
    };
};


export default reduxForm({
    form: "searchGift",
    onSubmitFail: (errors, dispatch) => {
        dispatch(focus('searchGift', Object.keys(errors)[0]));
    }
})(SearchForm);