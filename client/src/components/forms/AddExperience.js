import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const initState = {
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
};

const AddExperience = ({ addExperience, history })=> {

  const [ formData, setFormData ] = useState(initState);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e=> setFormData({...formData, [e.target.name]: e.target.value});
  
  const onSubmit = e=> {
    e.preventDefault();
    addExperience(formData, history);
  };

  const ret = (
    <Fragment>
      <h1 className='text-4xl text-blue-600'>Add An Experience</h1>
      <section className='my-2'>
        <p className='text-2xl'><i className='fas fa-code-branch'></i> Add any developer/programming positions that you have had in the past</p>
        <small className='block text-xm my-4 text-gray-600'>
          * = require field
        </small>
        <form onSubmit={onSubmit}>
          <div className='my-4'>
            <input name='title' value={title} onChange={onChange} type='text' placeholder='* Job Title' className='w-full py-1 px-2 border' />
          </div>
          <div className='my-4'>
            <input name='company' value={company} onChange={onChange} type='text' placeholder='* Company' className='w-full py-1 px-2 border' />
          </div>
          <div className='my-4'>
            <input name='location' value={location} onChange={onChange} type='text' placeholder='Location' className='w-full py-1 px-2 border' />
          </div>
          <div className='my-4'>
            From Date
            <input name='from' value={from} onChange={onChange} type='date' className='w-full py-1 px-2 border' />
          </div>
          <div className='my-4 font-thin'>
            <input name='current' onChange={() => setFormData({...formData, current: !current})} checked={current} value={current} type='checkbox' className='' /> Current Job
          </div>
          <div className='my-4'>
            To Date
            <input name='to' value={to} onChange={onChange} disabled={current} type='date' className='w-full py-1 px-2 border' />
          </div>
          <div className='my-4'>
            <textarea name='description' value={description} onChange={onChange} rows='4' placeholder='Job Description' className='w-full p-1 border'></textarea>
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
  { addExperience }
)(AddExperience);
