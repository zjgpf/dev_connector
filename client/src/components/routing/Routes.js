import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auths/Register';
import Login from '../auths/Login';
import Alert from '../layouts/Alert';
import Dashboard from '../dashboard/Dashboard';
//import ProfileForm from '../profile-forms/ProfileForm';
//import AddExperience from '../profile-forms/AddExperience';
//import AddEducation from '../profile-forms/AddEducation';
//import Profiles from '../profiles/Profiles';
//import Profile from '../profile/Profile';
//import Posts from '../posts/Posts';
//import Post from '../post/Post';
//import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = ()=> {
  return (
    <section className='max-w-screen-lg m-auto p-4 mt-24'>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
