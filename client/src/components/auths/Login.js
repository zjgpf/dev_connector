import React, { Fragment,useState,useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addAlert } from '../../actions/alert';
import { login } from '../../actions/auth';

const Login = ({ addAlert, login, msg, isAuthenticated })=> {

  const initialState = {
    email: '',
    password: '',
  };

  const [ formData, setFormData ] = useState(initialState); 
  const { email, password } = formData;
  useEffect(()=>{
    if ( isAuthenticated === true ) {
      addAlert('Login Succeed', 'bg-green-700');
    }    
    else if ( isAuthenticated === false ) {
      addAlert(msg, 'bg-red-700');
      setFormData(initialState);
    } 
  }, [ isAuthenticated ]);
  if (isAuthenticated) return <Redirect to='/dashboard' />
  const onChange = e=> setFormData({...formData, [e.target.name]:e.target.value});
  const onSubmit = async e=> {
    e.preventDefault(); 
    addAlert('Login in...','bg-gray-700');
    login(formData);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit} >
        <h1 className='text-4xl text-blue-600'>Sign In</h1>
        <p className='text-xl'><i className='fas fa-user'></i> Sign into Your Account</p>
        <input value={email} onChange={onChange} name='email' type='email' placeholder='Email Address' className='w-full py-1 px-2 my-2 border'/> 
        <input value={password} onChange={onChange} name='password' type='text' placeholder='Password' className='w-full py-1 px-2 my-2 border'/> 
        <input type='submit' value='Login' className='px-4 py-2 mt-4 bg-blue-700 text-white cursor-pointer hover:opacity-75'/>
      </form>
      <p className='mt-4'>Don't have an account? <Link to='/register' className='text-blue-600'>Sign Up</Link></p>     
    </Fragment>
  );

}

export default connect(
  state => ({
    msg: state.auth.msg,
    isAuthenticated: state.auth.isAuthenticated
  }),
  { addAlert, login }
)(Login);
