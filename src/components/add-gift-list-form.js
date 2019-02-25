import React from 'react';

export default class AddGiftListForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }
        this.textInput.value = '';
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>New List: </h3>
                <input type="text" placeholder="Name" required ref={input => this.textInput = input}/> <br />
                <input type="submit" value="Add List" />
            </form>
        );
    };
};

