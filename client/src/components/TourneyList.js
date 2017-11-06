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
          <h3 className="venue">Venue: {tourney.venue}</h3>
          <h3 className="buyin">Buy In: {tourney.buyin}</h3>
          <h3 className="date">
            Date: {new Date(tourney.date).toLocaleDateString()}
          </h3>
          <div className="receipt">
            <h3>Receipt:</h3>
            <img src={tourney.receipt} alt="/" height="142" width="142" />
          </div>
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
