import React, { Fragment} from 'react';
import Form from './components/Form'

const App = () => {
  return (
    <Fragment>
      <h1>administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
