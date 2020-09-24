import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auths/Register';
import Login from '../auths/Login';
import Alert from '../layouts/Alert';
import Dashboard from '../dashboard/Dashboard';
import ProfileForm from '../forms/ProfileForm';
import AddExperience from '../forms/AddExperience';
import AddEducation from '../forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
//import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = ()=> {
  return (
    <section className='max-w-screen-lg m-auto p-4 mt-24'>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/post/:id" component={Post} />
      </Switch>
    </section>
  );
};

export default Routes;
