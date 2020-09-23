import React from 'react';

const ProfileAbout = ({ profile: { bio, skills, user: { name } }}) => {
  return (
    <section className='my-4 border text-center'>
      <div className='m-4 p-4 border-b'> 
        <h2 className='text-2xl text-blue-600'>{name.trim().split(' ')[0]}s Bio</h2> 
        <p className='text-xl font-thin'>{bio}</p>
      </div>
      <div className='m-4 p-4 bg-gray-100'>
        <h2 className='text-2xl text-blue-600'>Skill Set</h2> 
        <ul className='flex justify-center my-4'>
          { skills.map( (skill, index) => <li key={index} className='font-thin mx-4'><i className='fas fa-check'></i>{skill}</li>) }
        </ul>
      </div>
    </section>
  )
};

export default ProfileAbout;
