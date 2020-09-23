import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({ education: { school, from, to, degree, fieldofstudy, description } }) => {
  return (
    <div className='border-b'>
      <p className='my-2 text-xl'>{school}</p>
      <p className='my-2 text-xl font-thin'>
        <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
        {!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
      </p>
      <p className='my-2 text-xl font-thin'><strong>Degree:</strong> {degree}</p>
      <p className='my-2 text-xl font-thin'><strong>fieldofstudy:</strong> {fieldofstudy}</p>
      <p className='mb-8 text-xl font-thin'><strong>Description:</strong> {description} </p>
    </div>
  );
}

export default ProfileEducation;
