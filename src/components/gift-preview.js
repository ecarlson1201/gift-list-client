import React from 'react';
import { connect } from 'react-redux';

import { clickGift } from '../actions';

export class GiftPreview extends React.Component {
    handleClick(data) {
        this.props.dispatch(clickGift(data))
        console.log(this.props)
        console.log(this.props.lists.reduce((acc, val, index) => {
            acc.push(this.props.lists[index].title)
            return acc
        }, []))
    }

    render() {
        return <div onClick={() => this.handleClick(this.props)}>
            Gift Name: {this.props.name}<br />
            Price Range: {this.props.price}<br />
            Suggested Link: <a href={this.props.link} rel='noopener noreferrer' target='_blank' >{this.props.link}</a> <br />
        </div>;
    };
};

export default connect()(GiftPreview);