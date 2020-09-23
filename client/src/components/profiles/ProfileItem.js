import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profileItem: { user: { _id, name }, status, company, location, skills } })=> {
  return (
    <div className='mt-4 border bg-gray-300 p-4 flex justify-between items-center'>
      <div className='flex items-center'> 
        <img className='rounded-full' src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' />
        <div className='mx-4'>
          <h3 className='text-2xl border'>{name}</h3>
          <p className='my-2 font-thin'>{status} {company && <span> at {company}</span>}</p>
          <p className='my-2 font-thin'>{location && <span>{location}</span>}</p>
          <Link to={`/profile/${_id}`} className='py-2 px-4 bg-blue-600 text-white hover:opacity-75'>View Profile</Link>
        </div>
      </div>
      <ul>
        {
          skills.map( (skill, index) => <li key={index} className='m-2 text-blue-500'><i className='fas fa-check'></i>{skill}</li> )
        }
      </ul>
    </div>     
  );
};

export default ProfileItem;
