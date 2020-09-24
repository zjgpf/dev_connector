import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PostItem from '../posts/PostItem';
import Spinner from '../layouts/Spinner';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

import { getPost } from '../../actions/post';

const Post = ({ post, getPost, match, loading }) => {

  useEffect(()=>{
    getPost(match.params.id);
  },[]);

  if (loading || post === null) return <Spinner />

  return (
    <Fragment>
      <Link to='/posts' className='text-xl bg-gray-100 px-4 py-2 my-2 hover:opacity-75 inline-block'>Back To Posts</Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      { post.comments.map( comment => <CommentItem key={comment._id} postId={post._id} comment={comment} /> ) }
    </Fragment>
  )

}

export default connect(
  state => ({
    post: state.post.post,
    loading: state.post.loading
  }),
  { getPost }
)(Post);
