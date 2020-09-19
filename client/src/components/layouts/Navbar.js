import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className='fixed top-0 z-10 w-full flex justify-between p-4 items-center bg-gray-800 opacity-75 text-white border-b-2 border-blue-600'>
      <Link to='/' className='flex items-center text-2xl hover:text-blue-200'>
        <i className='fas fa-code'></i> <h1 className=' mx-2'>DevConnector</h1>
      </Link>
      <ul className='flex'>
        <li className='mx-4'><Link to='/profiles' className='hover:text-blue-200'>Developers</Link></li>
        <li className='mx-4'><Link to='/register' className='hover:text-blue-200'>Register</Link></li>
        <li className='mx-4'><Link to='/login' className='hover:text-blue-200'>Login</Link></li>
      </ul>
    </nav>
  )
};

export default Navbar;
