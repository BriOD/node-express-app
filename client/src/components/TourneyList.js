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
          <h3 className="venue">
            Venue: <br />
            <span>{tourney.venue}</span>
          </h3>
          <h3 className="buyin">
            Buy In: <br />
            {tourney.buyin}
          </h3>
          <h3 className="date">
            Date: <br />
            {new Date(tourney.date).toLocaleDateString()}
          </h3>
          <div className="receipt">
            <h3>Receipt:</h3>
            <img className="img" src={tourney.receipt} alt="/" />
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
