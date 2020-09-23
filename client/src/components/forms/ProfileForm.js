import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { createEditProfile } from '../../actions/profile'; 
import { addAlert } from '../../actions/alert'; 

const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const ProfileForm = ({ createEditProfile, profile, loading, addAlert, history }) => {

  const [ formData, setFormData ] = useState(initialState); 

  const [ displaySocialInputs, toggleSocialInputs ] = useState(false);
  
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e=> setFormData({...formData, [e.target.name]:e.target.value});

  const onSubmit = e=> {
    e.preventDefault(); 
    if (!profile) {
      addAlert('Creating profile...', 'bg-gray-600');
      createEditProfile(formData, history);
    }
    else {
      addAlert('Editing profile...', 'bg-gray-600');
      createEditProfile(formData, history, true);
    }
  };

  useEffect( ()=> {
    if (profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      setFormData(profileData); 
    } 
  }, [ profile ]);

  return (
    <Fragment>
      <h1 className='text-4xl text-blue-600'>{profile === null ? 'Create':'Edit'} Your Profile</h1>
      <section className='my-2'>
        <p className='text-2xl'><i className='fas fa-user'></i> Let's get some information to make your profile stand out</p>
        <small className='block text-xm my-4 text-gray-600'>
          * = require field
        </small>
        <form onSubmit={onSubmit} >
          <div className='my-4'>
            <select name='status' value={status} onChange={onChange} className='py-1 px-2 w-full border'>
              <option value='* Select Professional Status'>* Select Professional Status</option> 
              <option value='Developer'>Developer</option> 
              <option value='Manager'>Manager</option> 
            </select>
            <small className='text-gray-500 text-sm'>Give us an idea of where you are at in your career</small>
          </div>
          <div className='my-4'>
            <input name='company' value={company} onChange={onChange} type='text' placeholder='Company' className='w-full py-1 px-2 border' />
            <small className='text-gray-500 text-sm'>Could be your own company or one you work for</small>
          </div>
          <div className='my-4'>
            <input name='website' value={website} onChange={onChange} type='text' placeholder='Website' className='w-full py-1 px-2 border' />
            <small className='text-gray-500 text-sm'>Could be your own or a company website</small>
          </div>
          <div className='my-4'>
            <input name='location' value={location} onChange={onChange} type='text' placeholder='Location' className='w-full py-1 px-2 border' />
            <small className='text-gray-500 text-sm'>City & state suggested (eg. Boston, MA)</small>
          </div>
          <div className='my-4'>
            <input name='skills' value={skills} onChange={onChange} type='text' placeholder='* Skills' className='w-full py-1 px-2 border' />
            <small className='text-gray-500 text-sm'>Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
          </div>
          <div className='my-4'>
            <input name='githubusername' value={githubusername} onChange={onChange} type='text' placeholder='Github Username' className='w-full py-1 px-2 border' />
            <small className='text-gray-500 text-sm'>If you want your latest repos and a Github link, include your username</small>
          </div>
          <div className='my-4'>
            <textarea name='bio' value={bio} onChange={onChange} rows='3' placeholder='A short bio of yourself' className='w-full p-1 border'></textarea>
            <small className='text-gray-500 text-sm'>Tell us a little about yourself</small>
          </div>
          <div className='block my-8 font-thin'> 
            <button type='button' onClick={() => toggleSocialInputs(!displaySocialInputs)} className='py-2 px-4 bg-gray-200 inline-block cursor:pointer hover:opacity-75'>Add Social Network Links</button>
            <span className='text-gray-400'>  Optional</span>
          </div>
          {
            displaySocialInputs && (
              <Fragment>
                <div className='my-4 flex'>
                  <i className='fab fa-twitter fa-2x pr-4'></i>
                  <input name='twitter' value={twitter} onChange={onChange} type='text' placeholder='Twitter URL' className='w-full py-1 px-2 border' />
                </div>
                <div className='my-4 flex'>
                  <i className='fab fa-facebook fa-2x pr-4'></i>
                  <input name='facebook' value={facebook} onChange={onChange} type='text' placeholder='Facebook URL' className='w-full py-1 px-2 border' />
                </div>
                <div className='my-4 flex'>
                  <i className='fab fa-youtube fa-2x pr-4'></i>
                  <input name='youtube' value={youtube} onChange={onChange} type='text' placeholder='Youtube URL' className='w-full py-1 px-2 border' />
                </div>
                <div className='my-4 flex'>
                  <i className='fab fa-linkedin fa-2x pr-4'></i>
                  <input name='linkedin' value={linkedin} onChange={onChange} type='text' placeholder='Linkedin URL' className='w-full py-1 px-2 border' />
                </div>
                <div className='my-4 flex'>
                  <i className='fab fa-instagram fa-2x pr-4'></i>
                  <input name='instagram' value={instagram} onChange={onChange} type='text' placeholder='Instagram URL' className='w-full py-1 px-2 border' />
                </div>
              </Fragment>
            )
          }
          <div className='flex my-8'>
            <button type='submit'  className='bg-blue-600 text-white mr-4 inline-block cursor-pointer hover:opacity-75 px-4 py-2'>Submit</button>
            <Link to='/dashboard' className='bg-gray-300 hover:opacity-75 px-4 py-2'>Go Back</Link>
          </div>
        </form>
      </section>
    </Fragment>
  );

}

export default connect(
  state => ({ 
    profile: state.profile.profile,
    loading: state.profile.loading
  }),
  { createEditProfile, addAlert }
)(ProfileForm);
