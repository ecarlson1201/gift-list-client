import React from 'react';
import { connect } from 'react-redux';

import { GiftList } from './gift-list';
import AddGiftListForm from './add-gift-list-form';
import { addGiftList, deleteGiftList } from '../actions'

export class GiftListBoard extends React.Component {
    addGiftList(title) {
        this.props.dispatch(addGiftList(title))
    };
    
    deleteGiftList(index){
        this.props.dispatch(deleteGiftList(index))
    };
    
    render() {

        const lists = this.props.lists.map((list, index) => (
            <li key={index}>
                <GiftList index={index} {...list} />
                <button onClick={index => this.deleteGiftList(index)}>Delete List</button>
            </li>
        ));

        return <div>
            <h1>Your Gift Lists</h1>
            <ul className='giftLists'>
                {lists}
            </ul>
            <AddGiftListForm
                type='list'
                onAdd={title => this.addGiftList(title)}
            />
        </div>
    };
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(GiftListBoard);