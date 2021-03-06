import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import GiftList from './gift-list';
import AddGiftListForm from './add-gift-list-form';
import NavBar from './nav-bar';

import { addGiftList, deleteGiftList, fetchProtectedData } from '../actions/protected-data'

export class GiftListBoard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    };

    addGiftList(title) {
        this.props.dispatch(addGiftList(title))
    };

    deleteGiftList(event) {
        return this.props.dispatch(deleteGiftList(event.currentTarget.getAttribute('data-id')))
            .then(() => { this.props.dispatch(fetchProtectedData()) });
    };

    render() {
        if (this.props.loggedOut) {
            return <Redirect to="/" />
        };
        const lists = this.props.lists.map((list, index) => (
            <li className='giftlist' key={index}>
                <h2>{this.props.lists[index].title}'s List</h2>
                <button className='deleteList' data-id={this.props.lists[index]._id} onClick={event => this.deleteGiftList(event)}>Delete</button>
                <GiftList index={index} list={this.props.lists[index]._id} buttons={true} {...list} />
            </li>
        ));

        return <div>
            <NavBar />
            <h1>Your Gift Lists</h1>
            <AddGiftListForm
                type='list'
                onAdd={title => this.addGiftList(title)}
            />
            <ul>
                {lists}
            </ul>
        </div>
    };
};

const mapStateToProps = state => ({
    lists: state.protectedData.data.lists,
    loggedOut: state.auth.currentUser === null
});

export default connect(mapStateToProps)(GiftListBoard);