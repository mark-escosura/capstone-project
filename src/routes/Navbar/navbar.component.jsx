import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='nav-container'>
        <Link to='/' className='logo-container'>
          <h1 className='logo'>FS</h1>
        </Link>
        <input placeholder='search' type='search' />
        <div className='links-container'>
          <Link to='about'>About</Link>
          <Link to='shop'>Shop</Link>
          <Link to='sign-in'>Sign In</Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
