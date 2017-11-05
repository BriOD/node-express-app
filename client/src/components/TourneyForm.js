import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import TourneyField from './TourneyField';
import { submitTourney } from '../actions';

const FIELDS = [
  { placeholder: 'Venue', name: 'venue', type: 'text' },
  { placeholder: 'Buy In', name: 'buyin', type: 'text' },
  { placeholder: 'Image URL for receipt', name: 'receipt', type: 'text' }
];

class TourneyForm extends Component {
  renderFields() {
    return _.map(FIELDS, field => {
      return (
        <Field
          key={field.name}
          component={TourneyField}
          label={field.label}
          placeholder={field.placeholder}
          name={field.name}
          type={field.type}
        />
      );
    });
  }

  onSubmit(values) {
    // console.log(this.props.history);
    this.props.submitTourney(values, this.props.history);
  }

  render() {
    return (
      <div className="tourneyForm">
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          {this.renderFields()}
          <button className="submitBttn" type="submit">
            Create Tourney
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${[name]}`;
    }
  });

  return errors;
}

function mapStateToProps(state) {
  return { formValues: state.form.tourneyForm.values };
}

export default reduxForm({
  validate: validate,
  form: 'tourneyForm'
})(connect(mapStateToProps, { submitTourney })(TourneyForm));
