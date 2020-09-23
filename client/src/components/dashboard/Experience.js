import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment';

import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience })=> {

  const ret = (
    <section className='my-8'>
      <h3 className='text-2xl my-4'>Experience Credentials</h3>
      <table className='my-2 border-separate font-thin'>
        <thead>
          <tr>
            <th className='bg-gray-200 px-4 py-2 font-thin'>Company</th>
            <th className='bg-gray-200 px-4 py-2 font-thin'>Title</th>
            <th className='bg-gray-200 px-4 py-2 font-thin'>Years</th>
            <th className='bg-gray-200 px-4 py-2 font-thin'></th>
          </tr>
        </thead>
        <tbody>
          {
            experience.map( exp => (
                <tr key={exp._id}>
                  <td className='px-4 py-2'>{exp.company}</td>
                  <td className='px-4 py-2'>{exp.title}</td>
                  <td className='px-4 py-2'><Moment format="YYYY/MM/DD">{moment.utc(exp.from)}</Moment> -{' '} {exp.to === null ? ( ' Now') : 
                                            ( <Moment format="YYYY/MM/DD">{moment.utc(exp.to)}</Moment>)}</td>
                  <td className='px-4 py-2'><button onClick={() => deleteExperience(exp._id)} className='py-1 px-2 bg-red-600 text-white cursor:pointer hover:opacity-75'>Delete</button></td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </section>
  );
  
  return ret;
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
