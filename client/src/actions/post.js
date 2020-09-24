import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';

import { addAlert } from './alert';

export const getPosts = ()=> async dispatch=> {
  try {
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token
      }
    };
    const res = await fetch('/api/posts', config);
    const data = await res.json();
    if (data.msg) dispatch({type: POST_ERROR, payload: data.msg});
    else {
      dispatch({
        type: GET_POSTS,
        payload: data
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const getPost = id=> async dispatch=> {
  try {
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token
      }
    };
    const res = await fetch(`/api/posts/${id}`, config);
    const data = await res.json();
    if (data.msg) dispatch({type: POST_ERROR, payload: data.msg});
    else {
      dispatch({
        type: GET_POST,
        payload: data
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const addLike = id=> async dispatch=> {
  try {
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token
      },
      method: 'PUT'
    };
    const res = await fetch(`/api/posts/like/${id}`, config);
    const data = await res.json();
    if (data.msg) dispatch({type: POST_ERROR, payload: data.msg});
    else {
      dispatch({
        type: UPDATE_LIKES,
        payload: { id, likes: data }
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const removeLike = id=> async dispatch=> {
  try {
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token
      },
      method: 'PUT'
    };
    const res = await fetch(`/api/posts/unlike/${id}`, config);
    const data = await res.json();
    if (data.msg) dispatch({type: POST_ERROR, payload: data.msg});
    else {
      dispatch({
        type: UPDATE_LIKES,
        payload: { id, likes: data }
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = id=> async dispatch=> {
  try {
    dispatch(addAlert('Delete Post...', 'bg-gray-600'));
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token
      },
      method: 'DELETE'
    };
    const res = await fetch(`/api/posts/${id}`, config);
    const data = await res.json();
    dispatch(addAlert('Post Deleted', 'bg-green-600'));
    dispatch({
      type: DELETE_POST,
      payload: id
    });
  } catch (err) {
    console.error(err);
  }
};

export const addPost = formData => async dispatch=> {
  dispatch(addAlert('Add Post...', 'bg-gray-600'));
  try {
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
      method: 'POST'
    };
    const res = await fetch('/api/posts', config);
    const data = await res.json();
    if (data.msg) dispatch({type: POST_ERROR, payload: data.msg});
    else {
      dispatch(addAlert('Post Added', 'bg-green-600'));
      dispatch({
        type: ADD_POST,
        payload: data
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const addComment = (postId, formData) => async dispatch=> {
  dispatch(addAlert('Add Comment...', 'bg-gray-600'));
  try {
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
      method: 'POST'
    };
    const res = await fetch(`/api/posts/comment/${postId}`, config);
    const data = await res.json();
    if (data.msg) dispatch({type: POST_ERROR, payload: data.msg});
    else {
      dispatch({
        type: ADD_COMMENT,
        payload: data
      });
      dispatch(addAlert('Comment Added', 'bg-green-600'));
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteComment = (postId, commentId) => async dispatch=> {
  dispatch(addAlert('Delete Comment...', 'bg-gray-600'));
  try {
    const token = localStorage.getItem('token');
    if (!token) console.error('No token');
    const config = {
      headers: {
        'x-auth-token': token,
      },
      method: 'DELETE'
    };
    const res = await fetch(`/api/posts/comment/${postId}/${commentId}`, config);
    const data = await res.json();
    if (data.msg) dispatch({type: POST_ERROR, payload: data.msg});
    else {
      dispatch({
        type: REMOVE_COMMENT,
        payload: commentId
      });
      dispatch(addAlert('Comment Deleted', 'bg-green-600'));
    }
  } catch (err) {
    console.error(err);
  }
};
