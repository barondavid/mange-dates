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
      <h2>new date</h2>
      <form>
        <label>Pet name</label>
        <input
          type="text" 
          name="pet"
          className="u-full-width"
          placeholder="Pet name"
          onChange= { handleChange }
          value= { pet }
        />
        <label>Owner</label>
        <input
          type="text" 
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange= { handleChange }
          value= { owner }
        />
        <label>Date</label>
        <input
          type="date" 
          name="day"
          className="u-full-width"
          onChange= { handleChange }
          value={ day }
        />
        <label>Hour</label>
        <input
          type="time" 
          name="hour"
          className="u-full-width"
          onChange= { handleChange }
          value={ hour }
        />
        <label>Symptom</label>
        <textarea
          className="u-full-width"
          name="symptom"
          onChange= { handleChange }
          value={ symptom }
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