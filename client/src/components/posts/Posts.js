import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../layouts/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';

import { getPosts } from '../../actions/post';

const Posts = ({ posts, getPosts, loading }) => {

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) return <Spinner />

  return (
    <Fragment>
      <h1 className='text-4xl text-blue-600'>Posts</h1>
      <PostForm />
      {
        posts.map(
          post => <PostItem key={post._id} post={post} />
        )
      }
    </Fragment>
  )
};

export default connect(
  state => ({
    posts: state.post.posts,
    loading: state.post.loading
  }),
  { getPosts }
)(Posts);
