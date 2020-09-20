import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ isAuthenticated, logout }) => {
  
  const guest = (
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
  );

  const user = (
    <nav className="fixed top-0 z-10 w-full flex justify-between p-4 items-center bg-gray-800 opacity-75 text-white border-b-2 border-blue-600">
      <a href="index.html" className="flex items-center text-2xl hover:text-blue-200">
        <i className="fas fa-code"></i> <h1 className=" mx-2">DevConnector</h1>
      </a>
      <ul className="flex">
        <li className="mx-4"><Link to='/profiles' className="hover:text-blue-200">Developers</Link></li>
        <li className="mx-4"><Link to='/posts' className="hover:text-blue-200">Posts</Link></li>
        <li className="mx-4">|</li>
        <li className="mx-4"><Link to='/dashboard' className="hover:text-blue-200"><i className="fas fa-user"></i> Dashboard</Link></li>
        <li className="mx-4"><Link onClick={logout} to='/login' className="hover:text-blue-200"><i className="fas fa-sign-out-alt"></i>Logout</Link></li>
      </ul>
    </nav>
  );

  if (!isAuthenticated) return guest;
  else return user;
};

export default connect(
  state => ({ isAuthenticated: state.auth.isAuthenticated }),
  { logout }
)(Navbar);
