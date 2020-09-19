import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './App.css';

import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Login from './components/auths/Login';
import Register from './components/auths/Register';
import Alert from './components/layouts/Alert';

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
          <Route exact path='/' component={Landing} />
          <section className='max-w-screen-lg m-auto p-4 mt-24'>
            <Switch>
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Register' component={Register} />
            </Switch>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
