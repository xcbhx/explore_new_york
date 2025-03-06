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
    <div>
      <header>
        <h1 className='Navbar-Title'>Explore New York</h1>

        <div className='Navbar'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
            to='/'
            onClick={handleHomeClick} // Clear search on Home click
          >
            Home
          </NavLink>

          <a
            className='Nav-Link'
            href='/'
            onClick={(e) => {
              e.preventDefault();
              handleWhereNext();
            }}
          >
            Where Next
          </a>

          <form onSubmit={handleSearchSubmit}>
            <input
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={handleSearchInputChange}
              className='Search-Input'
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </header>
    </div>
  )
};

export default Navbar;