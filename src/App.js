import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import NavBar from './components/nav-bar';
import HomePageBoard from './components/home-page-board';
import GiftListBoard from './components/gift-list-board';
import SearchResultsBoard from './components/search-results-board';
import PostGift from './components/post-gift';
import GiftInfo from './components/gift-info';

export default function App(props){
    return (
        <div className="App">
          <NavBar />
          <HomePageBoard />
          <GiftListBoard />
          <SearchResultsBoard />
          <PostGift />
          <GiftInfo />
        </div>
    );
};