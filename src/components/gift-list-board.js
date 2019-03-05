import React from 'react';
import { connect } from 'react-redux';

import GiftList from './gift-list';
import AddGiftListForm from './add-gift-list-form';
import { addGiftList, deleteGiftList } from '../actions/protected-data'

export class GiftListBoard extends React.Component {
    addGiftList(title) {
        this.props.dispatch(addGiftList(title))
    };
    
    deleteGiftList(event){
        this.props.dispatch(deleteGiftList(parseInt(event.currentTarget.getAttribute('data-id'))));
    };
    
    render() {
        const lists = this.props.lists.map((list, index) => (
            <li key={index}>
                <h3>{this.props.lists[index].title}'s List</h3>
                <GiftList index={index} buttons={true} {...list}/>
                <button data-id={index}  onClick={event => this.deleteGiftList(event)}>Delete List</button>
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
    lists: state.protectedData.lists
});

export default connect(mapStateToProps)(GiftListBoard);