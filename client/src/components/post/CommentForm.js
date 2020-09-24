import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addComment } from '../../actions/post';

const CommentForm = ( {addComment,postId} ) => {

  const [text, setText] = useState('');

  return (
    <section className='my-2'>
      <div className='text-xl p-2 my-2 bg-blue-600 text-white'>
        Leave A Comment
      </div>
      <textarea name='text' value={text} onChange={ e=>setText(e.target.value) } className='border w-full p-1' rows='4' placeholder='Comment on this post'></textarea>
      <button onClick={() => {addComment(postId, {text}); setText('')}} className='inline-block cursor:pointer text-xl bg-black text-white py-1 px-2 my-2 hover:opacity-75'>Submit</button>
    </section>
  )
};

export default connect(
  null,
  {addComment}
)(CommentForm);
