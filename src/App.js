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
            <h2>Manage dates</h2>
            { dates.map(date => (
              <Date 
                key={ date.id }
                date={ date }
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
