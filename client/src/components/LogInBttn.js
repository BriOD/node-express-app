import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogInBttn extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

  render() {
    return (
      <bttn className="btn right">
        <ul>{this.renderContent()}</ul>
      </bttn>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LogInBttn);
