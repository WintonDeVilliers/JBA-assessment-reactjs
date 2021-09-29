import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { HomePage, NameFormPage, NotFoundPage} from './pages';
import {NavBar} from './NavBar';

function App() {
  
  return (
  
    <div className="App">
      <Router>
      <NavBar/>
      <div className="App-header">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/assessment">
              <NameFormPage />
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
