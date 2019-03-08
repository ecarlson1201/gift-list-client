import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavBar from './nav-bar';
import GiftPreview from './gift-preview';

export class SearchResultsBoard extends React.Component {
    render() {
        console.log(this.props.search)
        const searchList = (this.props.search[0].name === "No Results Found") ?
            "No Results Found" :
            this.props.search.map((list, index) => (
                <li key={index}>
                    <GiftPreview index={index} {...list} buttons={false} />
                </li>
            ));
        const searchParams = ("'" + Object.values(this.props.searchParams).join("','") + "'");

        return <div>
            <NavBar />
            <h1>Gift Idea Search Results</h1>
            <h3>Showing Results For: {searchParams}</h3>
            <ul>
                {searchList}
            </ul>
            <Link to='/homepage'>New Search</Link>
        </div>;
    };
};

const mapStateToProps = state => ({
    search: state.protectedData.search,
    searchParams: state.protectedData.searchParams
});

export default connect(mapStateToProps)(SearchResultsBoard);