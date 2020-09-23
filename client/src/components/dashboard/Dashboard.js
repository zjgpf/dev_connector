import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentProfile, deleteAccount } from '../../actions/profile';

import Spinner from '../layouts/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({ user, profile, getCurrentProfile, loading, isAuthenticated, deleteAccount })=> {
  
  useEffect(()=>{
    getCurrentProfile();
  }, []);

  if ( isAuthenticated && loading ) return <Spinner />

  const ret = (
    <Fragment>
      <h1 className='text-6xl text-blue-600'>Dashboard</h1>
      <section className='my-2'>
        <p className='text-2xl'><i className='fas fa-user'></i> Welcome {user.name}</p>
        {
          profile === null ? (
            <Fragment>
              <p>You have not yet setup a profile, please add some info</p>
              <Link to='/create-profile' className='bg-green-700 text-white px-2 py-1 my-2 hover:opacity-75 inline-block'>
                Create Profile
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <DashboardActions />
              <Experience experience={profile.experience} />
              <Education education={profile.education} />
            </Fragment>
          )
        }
      </section>
      <section className='my-8 text-xl'>
        <button onClick={deleteAccount} className='py-2 px-4 bg-red-600 text-white cursor:pointer hover:opacity-75'><i className='fas fa-user-minus'></i> Delete My Account</button>
    </section>
    </Fragment>
  );

  return ret;
};

export default connect(
  state => ({
    profile: state.profile.profile,
    loading: state.profile.loading,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  }),
  { getCurrentProfile, deleteAccount }
)(Dashboard);
