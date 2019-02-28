import React from 'react';
import { connect } from 'react-redux';

import GiftList from './gift-list';

export class HomePageBoard extends React.Component {
    render() {
        const lists = this.props.carouselData.map((list, index) => (
            <li key={index}>
                <h3>Browse {this.props.carouselData[index].title} Gifts</h3>
                <GiftList index={index} {...list} buttons={false}/>
            </li>
        ));
        return <div>
            <h1>Welcome to Gift List!</h1>
            <ul>
                {lists}
            </ul>
        </div>
    };
};

const mapStateToProps = state => ({
    carouselData: state.carouselData
});

export default connect(mapStateToProps)(HomePageBoard);