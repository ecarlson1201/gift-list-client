import React from 'react';
import { connect } from 'react-redux';

import './gift-preview.css'

import { clickGift } from '../actions';

export class GiftPreview extends React.Component {
    handleClick(clickedObject) {
        const optionsArray =this.props.lists.reduce((acc, val, index) => {
            acc.push(this.props.lists[index].title)
            return acc
        }, []);
        this.props.dispatch(clickGift(clickedObject, optionsArray))
    };

    render() {
        return <div onClick={() => this.handleClick(this.props)}>
            <img src={this.props.image} alt="gift-preview"/> <br/>
            Gift Name: {this.props.name}<br />
            Price Range: {this.props.price}<br />
            Suggested Link: <a href={this.props.link} rel='noopener noreferrer' target='_blank' >{this.props.link}</a> <br />
        </div>;
    };
};

const mapStateToProps = state => ({
    clicked: state.clicked,
    lists: state.lists
});

export default connect(mapStateToProps)(GiftPreview);