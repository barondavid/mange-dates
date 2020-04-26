import React from 'react';

const Date = ({date}) => (
  <div className="date">
    <p>Pet: <span>{date.pet}</span></p>
    <p>Owner: <span>{date.owner}</span></p>
    <p>Date: <span>{date.day}</span></p>
    <p>Hour: <span>{date.hour}</span></p>
    <p>Symptom: <span>{date.symptom}</span></p>
  </div>
);

export default Date;