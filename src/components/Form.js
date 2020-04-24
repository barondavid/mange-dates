import React, { Fragment, useState } from 'react';

const Form = () => {

  const [date, setDate] = useState({
    pet: '',
    owner: '',
    day: '',
    hour: '',
    symptom: '',
  });

  const handleChange = e => {
    setDate({
      ...date,
      [e.target.name]: e.target.value 
    })
  }

  const { pet, owner, day, hour, symptom } = date;

  return (
    <Fragment>
      <h2>create date</h2>
      <form>
        <label>Pet name</label>
        <input
          type="text" 
          name="pet"
          className="u-full-width"
          placeholder="Pet name"
          onChange= { handleChange }
        />
        <label>Owner</label>
        <input
          type="text" 
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange= { handleChange }
        />
        <label>Date</label>
        <input
          type="date" 
          name="day"
          className="u-full-width"
          onChange= { handleChange }
        />
        <label>Hour</label>
        <input
          type="time" 
          name="time"
          className="u-full-width"
          onChange= { handleChange }
        />
        <label>Symptom</label>
        <textarea
          className="u-full-width"
          name="symptom"
          onChange= { handleChange }
        >
        </textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Add Date</button>
      </form>
    </Fragment>
  );
}
export default Form;