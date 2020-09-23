import React from 'react';

const ProfileTop = ({ profile: { status, company, location, website, social, user: {name} } }) => {
  return (
      <div className='mt-4 shadow bg-blue-600 p-4 flex flex-col justify-center items-center text-white'>
        <img className='rounded-full' src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' />
        <h3 className='text-4xl my-2'>{name}</h3>
        <p className='my-2 text-xl font-thin'>{status} {company && <span> at {company}</span>}</p>
        <p className='my-2 font-thin'>{location && <span>{location}</span>}</p>
        <ul className='flex justify-center'>
          <li className='m-2 text-white'><a href='#' className='hover:text-black'><i className='fas fa-globe fa-2x'></i></a></li> 
          <li className='m-2 text-white'><a href='#' className='hover:text-black'><i className='fab fa-twitter fa-2x'></i></a></li> 
          <li className='m-2 text-white'><a href='#' className='hover:text-black'><i className='fab fa-facebook fa-2x'></i></a></li> 
          <li className='m-2 text-white'><a href='#' className='hover:text-black'><i className='fab fa-youtube fa-2x'></i></a></li> 
          <li className='m-2 text-white'><a href='#' className='hover:text-black'><i className='fab fa-instagram fa-2x'></i></a></li> 
        </ul>
      </div>
  );
};

export default ProfileTop;
