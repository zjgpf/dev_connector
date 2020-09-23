import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({ experience: { company, from, to, title, description } }) => {
  return (
    <div className='border-b'>
      <p className='my-2 text-xl'>{company}</p>
      <p className='my-2 text-xl font-thin'>
        <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
        {!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
      </p>
      <p className='my-2 text-xl font-thin'><strong>Position:</strong> {title}</p>
      <p className='mb-8 text-xl font-thin'><strong>Description:</strong> {description} </p>
    </div>
  );
}

export default ProfileExperience;
