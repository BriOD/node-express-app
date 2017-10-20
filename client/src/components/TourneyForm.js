import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import TourneyField from './TourneyField';

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

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button className="submitBttn" type="submit">
            Submit
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

export default reduxForm({
  validate: validate,
  form: 'tourneyForm'
})(TourneyForm);
