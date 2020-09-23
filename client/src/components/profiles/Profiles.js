import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import ProfileItem from './ProfileItem';
import Spinner from '../layouts/Spinner';

import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profiles, loading })=> {

  useEffect(()=>{
    getProfiles();
  }, []);

  if (loading) return <Spinner />;
  
  return (
      <Fragment> 
        <h1 className='text-4xl text-blue-600'>Developers</h1>
        <p className='text-xl'><i className='fab fa-connectdevelop'></i> Browse and connect with developers</p>
        { profiles.map( profileItem => <ProfileItem key={profileItem._id} profileItem={profileItem} />) }
      </Fragment>
  );
}

export default connect(
  state => ({ 
    profiles: state.profile.profiles, 
    loading: state.profile.loading
  }),
  { getProfiles }
)(Profiles);
