import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form'
import Date from './components/Date'

const App = () => {

  let initialDates = JSON.parse(localStorage.getItem('dates'));
  if (!initialDates) {
    initialDates = [];
  }

  const [dates, setDates] = useState([]);

  useEffect( () => {
    let initialDates = JSON.parse(localStorage.getItem('dates'));

    if (initialDates) {
      localStorage.setItem('dates', JSON.stringify(dates));
    } else {
      localStorage.setItem('dates', []);
    }
  }, [dates]);

  const createDate = date => {
    setDates([
      ...dates,
      date
    ]);
  }

  const title = dates.length === 0 ? 'No Dates' :'Manage Dates';

  const deleteDate = id => {
    const newDates = dates.filter(date => date.id !== id );
    setDates(newDates);
  }

  return (
    <Fragment>
      <h1>Manage Dates</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createDate={createDate}
            />
          </div>
          <div className="one-half column">
            <h2>{ title }</h2>
            { dates.map(date => (
              <Date 
                key={ date.id }
                date={ date }
                deleteDate={ deleteDate }
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
