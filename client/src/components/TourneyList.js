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
        <div key={tourney._id}>
          <h3>{tourney.venue}</h3>
          <h3>{tourney.buyin}</h3>
          <h3>{new Date(tourney.date).toLocaleDateString()}</h3>
          <h3>{tourney.receipt}</h3>
        </div>
      );
    });
  }

  render() {
    console.log('tourneys:', this.props.tourneys);
    return (
      <div>
        <h1>Tourney List</h1>
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
