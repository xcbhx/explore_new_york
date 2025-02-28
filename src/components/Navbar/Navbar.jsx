import Display from '../Display/Display';
import './Navbar.css';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <div>
      <header>
        <h1 className='title'>Explore New York</h1>

        <div className='navbar'>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } 
            to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } 
            to='/Discover'>Discover More</NavLink>
        </div>
        <div className='searchDisplay'>
          <Display />
        </div>
      </header>
    </div>
  )
};

export default Navbar;