import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './App.css';

import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Login from './components/auths/Login';
import Register from './components/auths/Register';
import Alert from './components/layouts/Alert';
import Routes from './components/routing/Routes';

import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';

const App = ()=> {
  useEffect(()=>{
    store.dispatch(loadUser()); 
  }, []);
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Fragment>
          <Alert />
          <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route component={Routes} />
            </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
