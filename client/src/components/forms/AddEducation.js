import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const initState = {
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
};

const AddEducation = ({ addEducation, history })=> {

  const [ formData, setFormData ] = useState(initState);

  const { school, degree, fieldofstudy, from, to, current, description } = formData;

  const onChange = e=> setFormData({...formData, [e.target.name]: e.target.value});
  
  const onSubmit = e=> {
    e.preventDefault();
    addEducation(formData, history);
  };

  const ret = (
    <Fragment>
      <h1 className='text-4xl text-blue-600'>Add An Education</h1>
      <section className='my-2'>
        <p className='text-2xl'><i className='fas fa-graduation-cap'></i> Add any school, bootcamp, etc that you have attended</p>
        <small className='block text-xm my-4 text-gray-600'>
          * = require field
        </small>
        <form onSubmit={onSubmit}>
          <div className='my-4'>
            <input name='school' value={school} onChange={onChange} type='text' placeholder='* School or Bootcamp' className='w-full py-1 px-2 border' />
          </div>
          <div className='my-4'>
            <input name='degree' value={degree} onChange={onChange} type='text' placeholder='* Degree or Certificate' className='w-full py-1 px-2 border' />
          </div>
          <div className='my-4'>
            <input name='fieldofstudy' value={fieldofstudy} onChange={onChange} type='text' placeholder='Field Of Study' className='w-full py-1 px-2 border' />
          </div>
          <div className='my-4'>
            From Date
            <input name='from' value={from} onChange={onChange} type='date' className='w-full py-1 px-2 border' />
          </div>
          <div className='my-4 font-thin'>
            <input name='current' onChange={() => setFormData({...formData, current: !current})} checked={current} value={current} type='checkbox' className='' /> Current School or Bootcamp
          </div>
          <div className='my-4'>
            To Date
            <input name='to' value={to} onChange={onChange} disabled={current} type='date' className='w-full py-1 px-2 border' />
          </div>
          <div className='my-4'>
            <textarea name='description' value={description} onChange={onChange} rows='4' placeholder='Program Description' className='w-full p-1 border'></textarea>
          </div>
          <div className='flex my-8'>
            <button type='submit' className='bg-blue-600 text-white mr-4 cursor-pointer hover:opacity-75 px-4 py-2'>Submit</button>
            <Link to='/dashboard' className='bg-gray-300 hover:opacity-75 px-4 py-2'>Go Back</Link>
          </div>
        </form>
      </section>
    </Fragment>
  );
  return ret;
};

export default connect(
  null,
  { addEducation }
)(AddEducation);
