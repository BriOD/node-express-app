import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTourneys } from '../actions';

class TourneyList extends Component {
  componentDidMount() {
    this.props.fetchTourneys();
  }

  renderTourneys() {
    this.props.tourneys.map(tourney => {
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
        <h1>These are all my Tourneys</h1>
        {this.renderTourneys()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tourneys: state.tourneys };
}

export default connect(mapStateToProps, { fetchTourneys })(TourneyList);
