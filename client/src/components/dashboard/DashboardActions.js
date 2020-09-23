import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = ()=> {

  const ret = (
    <Fragment>
      <div className='flex my-4'>
        <div className='px-4 py-2 bg-gray-200 mr-4 font-thin hover:opacity-75'> 
          <Link to='/edit-profile'><i className='fas fa-user-circle text-blue-500'></i> Edit Profile</Link>
        </div>
        <div className='px-4 py-2 bg-gray-200 mr-4 font-thin hover:opacity-75'> 
          <Link to='/add-experience'><i className='fab fa-black-tie text-blue-500'></i> Add Experience</Link>
        </div>
        <div className='px-4 py-2 bg-gray-200 mr-4 font-thin hover:opacity-75'> 
          <Link to='/add-education'><i className='fas fa-graduation-cap text-blue-500'></i> Add Education</Link>
        </div>
      </div>
    </Fragment>
  );

  return ret;
};

export default DashboardActions;
