import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addPost } from '../../actions/post';

const PostForm = ( {addPost} ) => {

  const [text, setText] = useState('');

  return (
    <section className='my-2'>
      <p className='text-2xl'><i className='fas fa-user'></i> Welcome to the community!</p>
      <div className='text-xl p-2 my-2 bg-blue-600 text-white'>
        Say Something...
      </div>
      <textarea name='text' value={text} onChange={ e=>setText(e.target.value) } className='border w-full p-1' rows='4' placeholder='Create a post'></textarea>
      <button onClick={() => {addPost({text}); setText('')}} className='inline-block cursor:pointer text-xl bg-black text-white py-1 px-2 my-2 hover:opacity-75'>Submit</button>
    </section>
  )
};

export default connect(
  null,
  {addPost}
)(PostForm);
