import React from 'react';

export default class GiftPreview extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this.props)
    }
    render() {
        return <div onClick={this.handleClick}>
            Gift Name: {this.props.name}<br />
            Price Range: {this.props.price}<br />
            Suggested Link: <a href={this.props.link} rel='noopener noreferrer' target='_blank' >{this.props.link}</a> <br />
        </div>
    };
};