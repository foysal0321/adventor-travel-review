import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';
import './Style.css'
import icon from './icon.png'

const Navbar = () => {
  const {user, logoutUser} = useContext(AuthContext)
  //console.log(user?.email);
    const navitem =
    <>
        <li><Link to='/'>Home</Link></li>
         <li><Link to='/services'>Services</Link></li>
         <li><Link to='/blog'>Blog</Link></li>
         {
          user?.email ? 
          <>
           <li><Link to='/review'>My Review</Link></li>
           <li><Link to='/addservice'>Add Service</Link></li>
           <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src= {`${user?.photoURL ? user?.photoURL : icon}`} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-56 h-36 -mx-24 ">
        <li>
          <a className="justify-between font-medium">
              {user?.displayName}         
          </a>
        </li>
        <li className='mx-4'>{user?.email}</li>
        <button onClick={logoutUser} className='btn btn-sm btn-accent mt-3 mx-2'>Log Out</button>
      </ul>
    </div>
          </>  : 
        <>
          <li><Link to='/signup'>SignUp</Link></li>
          <li><Link to='/login'>LogIn</Link></li>
        </>
        }
         
    </>

    return (
        <div>
        <div className="navbar  h-20  ">
          <div className="navbar-start">
          <div className="dropdown mobile">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              {navitem}
            </ul>
          </div>
         
         <Link to='/' className="btn btn-ghost normal-case text-xl">  
            <h3 className="text-4xl font-bold mx-0 lg:mx-20">Adventor.</h3>
            </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal ">
              {navitem}
            </ul>
            </div>
          </div>
       </div>
    );
};

export default Navbar;