import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

import './App.css';

import { refreshAuthToken } from './actions/auth';

import NavBar from './components/nav-bar';
import HomePageBoard from './components/home-page-board';
import GiftListBoard from './components/gift-list-board';
import SearchResultsBoard from './components/search-results-board';
import PostGift from './components/post-gift';
import GiftInfo from './components/gift-info';
import LandingPage from './components/landing-page';
import RegistrationPage from './components/registration-page';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    };
  };

  componentWillMount() {
    this.stopPeriodicRefresh();
  };

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  };

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    };
    clearInterval(this.refreshInterval);
  };

  render() {
    return (
      <div className="App" >
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/homepage" component={HomePageBoard} />
        <Route exact path="/lists" component={GiftListBoard} />
        <Route exact path="/search" component={SearchResultsBoard} />
        <Route exact path="/postgift" component={PostGift} />
        <Route exact path="/giftinfo/:id" component={GiftInfo} />

        {/*<NavBar />
        <LandingPage />
        <RegistrationPage />
        <HomePageBoard />
        <GiftListBoard />
        <SearchResultsBoard />
        <PostGift />
        <GiftInfo />*/}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));