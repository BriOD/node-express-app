import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Navbar from './Navbar';
import Landing from './Landing';
// import Dashboard from './Dashboard';
import TourneyForm from './TourneyForm';
import TourneyList from './TourneyList';
import TourneyShow from './TourneyShow';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <div className="container">
            <Navbar />
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/tourneys" component={TourneyList} />
            <Route exact path="/tourneys/:id" component={TourneyShow} />
            <Route exact path="/tourneys/new" component={TourneyForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
