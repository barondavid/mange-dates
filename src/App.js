import React, { Fragment, useState } from 'react';
import Form from './components/Form'
import Date from './components/Date'

const App = () => {

  const [dates, setDates] = useState([]);

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
      <h1>administrador de pacientes</h1>

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
