import React, { Fragment } from 'react';

const Form = () => {
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
        />
        <label>Owner</label>
        <input
          type="text" 
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
        />
        <label>Date</label>
        <input
          type="date" 
          name="date"
          className="u-full-width"
        />
        <label>Hour</label>
        <input
          type="time" 
          name="time"
          className="u-full-width"
        />
        <label>Symptom</label>
        <textarea
          className="u-full-width"
          name="symptom"
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