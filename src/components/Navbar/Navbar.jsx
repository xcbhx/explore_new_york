import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import data from '../../newYork-data.json';
import { useState } from 'react';

function Navbar({ onSearchChange }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleWhereNext = () => {
    const id = Math.floor(Math.random() * data.length);
    navigate(`/details/${id}`);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchChange(searchQuery);
  };

  const handleHomeClick = () => {
    setSearchQuery('');
    onSearchChange('');
  };

  return (
    <div className='Navbar'>
      <div className='Navbar-content'>
        <img className='Navbar-logo' src='/images/Logo.webp' alt='Explore New York Logo' />
        <div className='Nav-links'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
            to='/'
            onClick={handleHomeClick}
          >
            Home
          </NavLink>
          <a
            className='nav-link'
            href='/'
            onClick={(e) => {
              e.preventDefault();
              handleWhereNext();
            }}
          >
            Where Next
          </a>
        </div>
        <form className='Search-form' onSubmit={handleSearchSubmit}>
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearchInputChange}
            className='Search-input'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;