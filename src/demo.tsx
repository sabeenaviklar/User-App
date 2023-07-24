import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import App from './Components/userFirstPage';
import userFirstPage from './Components/userFirstPage';

import SecondPage from './Components/UserSecondPage'; // Import the SecondPage component
import './App.css'

const Main: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmitted = () => {
    setFormSubmitted(true);
  };

  return (
    <Router>
      {/* <Switch> */}
        <Route path="/" component={userFirstPage}>
          {/* {formSubmitted ? <SecondPage /> : <App onFormSubmit={handleFormSubmitted} />} */}
        </Route>
        <Route path="/second" component={SecondPage} />
      {/* </Switch> */}
    </Router>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
