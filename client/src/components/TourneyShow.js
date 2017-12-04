import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTourney } from '../actions/index';

class TourneyShow extends Component {
  componentWillMount() {
    this.props.fetchTourney(this.props.match.params.id);
  }

  render() {
    console.log('tourney:', this.props.tourney);
    const t = this.props.tourney[0];
    console.log('t:', t);
    if (!t) {
      return <div>Loading...</div>;
    }
    return (
      <div className="showpageContainer">
        <h3>Venue: {t.venue}</h3>
        <h3>Buy-In: ${t.buyin}</h3>
        <h3>Date: {new Date(t.date).toLocaleDateString()}</h3>
        <img className="showpageReceipt" src={t.receipt} alt="/" />
      </div>
    );
  }
}

function mapStateToProps({ tourney }) {
  return { tourney };
}

export default connect(mapStateToProps, { fetchTourney })(TourneyShow);
