import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { addAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ addAlert, register, isRegisterSuccess, msg, isAuthenticated })=> {
  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '' 
  };
  const [ formData, setFormData ] = useState(initialState); 
  const { name, email, password, password2 } = formData;
  useEffect( ()=> {
    if (isRegisterSuccess === false) {
      addAlert(msg,'bg-red-700');
    } 
    else if (isRegisterSuccess === true) {
      addAlert(msg, 'bg-green-700');
    }
  }, [isRegisterSuccess]);
  if (isAuthenticated) return <Redirect to='/dashboard' />
  const onChange = e=> setFormData({...formData, [e.target.name]:e.target.value});
  const onSubmit = async e=> {
    e.preventDefault(); 
    if ( password !== password2 ) {
      addAlert('Password not match', 'bg-red-700')
      return
    };
    addAlert('Registering...', 'bg-gray-700');
    register(formData);
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <h1 className='text-4xl text-blue-600'>Sign Up</h1>
        <p className='text-xl'><i className='fas fa-user'></i> Create Your Account</p>
        <input required onChange={onChange} value={name} name='name' type='text' placeholder='Name' className='w-full py-1 px-2 my-2 border'/> 
        <input required onChange={onChange} value={email} name='email' type='email' placeholder='Email Address' className='w-full py-1 px-2 my-2 border'/> 
        <small className='font-thin text-gray-600'>This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
        <input required minLength='6' onChange={onChange} value={password} name='password' type='text' placeholder='Password' className='w-full py-1 px-2 my-2 border'/> 
        <input required minLength='6' onChange={onChange} value={password2} name='password2' type='text' placeholder='Confirm Password' className='w-full py-1 px-2 my-2 border'/> 
        <input type='submit' value='Register' className='px-4 py-2 mt-4 bg-blue-700 text-white cursor-pointer hover:opacity-75'/>
      </form>
      <p className='mt-4'>Already have an account? <Link to='/login' className='text-blue-600'>Sign In</Link></p>
    </Fragment>

  );
}

export default connect(
  state => ({
    isRegisterSuccess: state.auth.isRegisterSuccess,
    msg: state.auth.msg,
    isAuthenticated: state.auth.isAuthenticated
  }),
  { addAlert, register }
)(Register);
