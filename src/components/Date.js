import React from 'react';
import PropTypes from 'prop-types';

const Date = ({date, deleteDate}) => (
  <div className="date">
    <p>Pet: <span>{date.pet}</span></p>
    <p>Owner: <span>{date.owner}</span></p>
    <p>Date: <span>{date.day}</span></p>
    <p>Hour: <span>{date.hour}</span></p>
    <p>Symptom: <span>{date.symptom}</span></p>

    <button
      className="button delete u-full-width"
      onClick={ () => deleteDate(date.id) }
    >Remove &times;</button>
  </div>
);

Date.propTypes = {
  date: PropTypes.object.isRequired,
  deleteDate: PropTypes.func.isRequired
}

export default Date;