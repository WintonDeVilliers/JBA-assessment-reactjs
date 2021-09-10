import './App.css';
import { CongratulationsMessage } from './CongratulationsMessage';
import React ,{useState} from 'react';
import { BrowserRouter as Router,Route, Link, Switch } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage, ControlledFormPage , UncontrolledFormPage} from './pages';
import {CounterButton} from './CounterButton';
import {NavBar} from './NavBar';
function App() {
  
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);


  const increment = () => setNumberOfClicks(numberOfClicks + 1);
  return (
  
    <div className="App">
      <Router>
      <NavBar/>
      <div className="App-header">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/counter">
              <CounterButtonPage />
            </Route>

            <Route path="/people-list">
              <PeopleListPage />
            </Route>

            <Route>
              <ControlledFormPage />
            </Route>

            <Route path="/uncontrolled">
              <UncontrolledFormPage />
            </Route>


            <Route path="/protected">
              <ProtectedPage />
            </Route>

            <Route>
              <NotFoundPage /> 
            </Route>

          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
