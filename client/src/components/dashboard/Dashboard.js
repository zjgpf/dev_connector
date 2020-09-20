import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ profile, getCurrentProfile })=> {
  
  useEffect(()=>{
    console.info('bbb:');
    getCurrentProfile();
  }, []);

  return (<div>Dashboard</div>);
};

export default connect(
  state => ({
    profile: state.profile.profile
  }),
  { getCurrentProfile }
)(Dashboard);
