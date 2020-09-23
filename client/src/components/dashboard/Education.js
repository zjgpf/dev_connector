import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment';

import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation })=> {

  const ret = (
    <section className='my-8'>
      <h3 className='text-2xl my-4'>Education Credentials</h3>
      <table className='my-2 border-separate font-thin'>
        <thead>
          <tr>
            <th className='bg-gray-200 px-4 py-2 font-thin'>School</th>
            <th className='bg-gray-200 px-4 py-2 font-thin'>Degree</th>
            <th className='bg-gray-200 px-4 py-2 font-thin'>Years</th>
            <th className='bg-gray-200 px-4 py-2 font-thin'></th>
          </tr>
        </thead>
        <tbody>
          {
            education.map( edu => (
                <tr key={edu._id}>
                  <td className='px-4 py-2'>{edu.school}</td>
                  <td className='px-4 py-2'>{edu.degree}</td>
                  <td className='px-4 py-2'><Moment format="YYYY/MM/DD">{moment.utc(edu.from)}</Moment> -{' '} {edu.to === null ? ( ' Now') : 
                                            ( <Moment format="YYYY/MM/DD">{moment.utc(edu.to)}</Moment>)}</td>
                  <td className='px-4 py-2'><button onClick={()=> deleteEducation(edu._id)} className='py-1 px-2 bg-red-600 text-white cursor:pointer hover:opacity-75'>Delete</button></td>
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
  { deleteEducation }
)(Education);
