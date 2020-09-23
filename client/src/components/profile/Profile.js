import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';

import Spinner from '../layouts/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';

import { getProfileById } from '../../actions/profile';

const Profile = ({ getProfileById, match, profile, auth, loading })=> {

  useEffect(() => {
      getProfileById(match.params.id);
    }, 
    [match.params.id]
  );

  if (loading || !profile ) return <Spinner />

  const showEdit = auth.isAuthenticated && auth.user._id === profile.user._id;
  const showExperience = profile.experience.length > 0;
  const showEducation = profile.education.length > 0;
  const showGithub = profile.githubusername !== '';
  
  return (
    <div>
      <Link to='/profiles' className='font-thin hover:opacity-75 text-black bg-gray-300 py-2 px-4 inline-block mr-4'>Back To Profiles</Link>
      { showEdit && <Link to='/edit-profile' className='font-thin hover:opacity-75 text-black bg-blue-600 inline-block py-2 px-4 inline-block text-white'>Edit Profile</Link> }
      <ProfileTop profile={profile} />
      <ProfileAbout profile={profile} />
      <section className='grid grid-cols-1 gap-2 md:grid-cols-2'>
        <div className='p-4 border'>
          <h2 className='text-2xl text-blue-600'>Experience</h2> 
            { showExperience ? profile.experience.map( (exp, index) => <ProfileExperience key={index} experience={exp} />) : <h4>No experience credentials</h4> }
        </div> 
        <div className='p-4 border'>
          <h2 className='text-2xl text-blue-600'>Education</h2> 
            { showEducation ? profile.education.map( (edu, index) => <ProfileEducation key={index} education={edu} />) : <h4>No education credentials</h4> }
        </div> 
      </section>
      { showGithub && <ProfileGithub userName={profile.githubusername} />}
    </div>
  )

};

export default connect(
  state => ({
    profile: state.profile.profile,
    loading: state.profile.loading,
    auth: state.auth
  }),
  { getProfileById }
)(Profile);
