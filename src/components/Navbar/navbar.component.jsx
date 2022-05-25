import { Link } from 'react-router-dom';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <div className='logo-container'>
          <h1 className='logo'>FS</h1>
        </div>
        <input placeholder='search' type='search' />
        <div className='links-container'>
          <Link to='/'>Home</Link>
          <Link to='about'>About</Link>
          <Link to='shop'>Shop</Link>
          <Link to='contact'>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
