import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteTypes } from './utils/constants';
import Footer from './components/Footer/Footer';
import Backdrop from './components/Backdrop/Backdrop';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import './App.css';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <Backdrop />
      <Switch>
        <Route exact path="/"
          render={() => {
            return <Redirect to={RouteTypes.NEWS} />
          }}
        />
        <Route path={RouteTypes.NEWS} component={Dashboard} />
      </Switch>
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
