import './App.css';
import { CongratulationsMessage } from './CongratulationsMessage';
import React ,{useState} from 'react';
import { BrowserRouter as Router,Route, Link, Switch } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages';
import {CounterButton} from './CounterButton';
import { ProtecntedPage } from './pages/ProtectedPage';
function App() {
  
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);


  const increment = () => setNumberOfClicks(numberOfClicks + 1);
  return (
  
    <div className="App">
      <Router>
        <Link to="/counter">Got to counter Button Page</Link>
        <Link to="/people-list">Got to people list Page</Link>
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

          <Route path="/protected">
            <ProtecntedPage/>
          </Route>

          <Route>
            <NotFoundPage />
          </Route>

      </Switch>

      </Router>
    </div>
  );
}

export default App;
