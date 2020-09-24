import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  auth,
  comment: { _id, text, name, user, date },
  deleteComment
}) => {
  return (
      <div className='border flex p-4 justify-between items-center my-2'>
        <div className='w-1/4 m-2'>
          <Link to={`/profile/${user}`}><img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' className='rounded-full my-2 m-auto' /></Link>
          <h3 className='text-blue-500 text-center'>{name}</h3>
        </div>
        <div className='w-3/4 m-2'>
          <p className='my-4'>{text}</p>
          <small className='block my-2 text-sm text-gray-400'>Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></small>
            <div className='flex mb-2'>
              { auth.user._id === user && <button onClick={()=>{deleteComment(postId, _id)}} className='hover:opacity-75 cursor:pointer px-4 py-2 mr-2 bg-red-600 text-white'><i className='fas fa-times'></i></button> }
            </div>
        </div>
      </div>
  );
}

export default connect(
  state => ({ auth: state.auth }),
  { deleteComment }
)(CommentItem);
