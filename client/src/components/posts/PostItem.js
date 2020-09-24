import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  auth,
  post: { _id, text, name, user, likes, comments, date },
  addLike,
  removeLike,
  deletePost,
  showActions
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
          { showActions && 
            (
              <div className='flex mb-2'>
                <button onClick={() => addLike(_id)} className='hover:opacity-75 cursor:pointer px-4 py-2 mr-2 bg-gray-200'><i className='fas fa-thumbs-up'></i> <span>{likes.length > 0 && <span>{likes.length}</span>}</span></button>
                <button onClick={() => removeLike(_id)} className='hover:opacity-75 cursor:pointer px-4 py-2 mr-2 bg-gray-200'><i className='fas fa-thumbs-down'></i></button>
                <Link to={`/post/${_id}`} className='hover:opacity-75 px-4 py-2 mr-2 bg-blue-700 text-white'>Discussion { comments.length > 0 && (<span className='p-1 bg-white text-blue-700 rounded text-xs'>{comments.length}</span>) }</Link>
                { auth.user._id === user && <button onClick={()=>{deletePost(_id)}} className='hover:opacity-75 cursor:pointer px-4 py-2 mr-2 bg-red-600 text-white'><i className='fas fa-times'></i></button> }
              </div>
            )
          }
        </div>
      </div>
  );
}

PostItem.defaultProps = {
  showActions: true
};

export default connect(
  state => ({ auth: state.auth }),
  { addLike, removeLike, deletePost }
)(PostItem);
