import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchTourneys } from '../actions';

class TourneyList extends Component {
  componentDidMount() {
    this.props.fetchTourneys();
  }

  renderTourneys() {
    return this.props.tourneys.map(tourney => {
      return (
        <div className="tourney" key={tourney._id}>
          <h3>Venue: {tourney.venue}</h3>
          <h3>Buy In: {tourney.buyin}</h3>
          <h3>Date: {new Date(tourney.date).toLocaleDateString()}</h3>
          <h3>Receipt: {tourney.receipt}</h3>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="tourneyList">
        {this.renderTourneys()}
        <Link to="tourneys/new">Add New Tourney</Link>
      </div>
    );
  }
}

function mapStateToProps({ tourneys }) {
  return { tourneys };
}

export default connect(mapStateToProps, { fetchTourneys })(TourneyList);
