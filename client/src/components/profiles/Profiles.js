import React, { Fragment } from 'react';
import ProfileItem from 'ProfileItem';

const Profiles = ()=> {
  return (
      <Fragment> 
        <h1 class='text-4xl text-blue-600'>Developers</h1>
        <p class='text-xl'><i class='fab fa-connectdevelop'></i> Browse and connect with developers</p>
        <ProfileItem />
      <Fragment>
  );
}

export default Profiles;
