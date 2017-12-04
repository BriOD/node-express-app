import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchTourneys } from '../actions';

class TourneyList extends Component {
  componentDidMount() {
    this.props.fetchTourneys();
  }

  renderListOfTourneys() {
    return this.props.tourneys.map(tourney => {
      return (
        <Link to={'tourneys/' + tourney._id} key={tourney._id}>
          {new Date(tourney.date).toLocaleDateString()}
        </Link>
      );
    });
  }

  renderTourneys() {
    return this.props.tourneys.map(tourney => {
      return (
        <Link to={'tourneys/' + tourney._id} key={tourney._id}>
          <div className="tourney" key={tourney._id}>
            <h3 className="venue">
              Venue: <br />
              <span>{tourney.venue}</span>
            </h3>
            <h3 className="buyin">
              Buy In: <br />
              ${tourney.buyin}
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
        </Link>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="tourneyContainer">
        <div className="tourneyList">{this.renderTourneys()}</div>
        <Link to="tourneys/new">Add New Tourney</Link>
      </div>
    );
  }
}

function mapStateToProps({ tourneys }) {
  return { tourneys };
}

export default connect(mapStateToProps, { fetchTourneys })(TourneyList);
