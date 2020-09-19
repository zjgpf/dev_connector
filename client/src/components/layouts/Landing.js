import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section class='overlay-outter'>
      <div class='overlay'> 
        <div class='flex flex-col items-center h-screen w-3/4 justify-center text-white m-auto'>
          <h1 class='text-6xl my-4'>Developer Connector</h1>
          <p class='text-2xl'>Create a developer profile/portfolio, share posts and get help from other developers</p>
          <div class='flex justify-center my-4'>
            <Link to='/register' class='bg-blue-600 text-white py-2 px-4 mr-4 hover:opacity-75'>Sign Up</Link>
            <Link to='/login' class='bg-white text-black py-2 px-4 hover:opacity-75'>Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
