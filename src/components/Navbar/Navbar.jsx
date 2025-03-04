import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import data from '../../newYork-data.json';



function Navbar() {
  const navigate = useNavigate();

  const handleWhereNext = () => {
    const id = Math.floor(Math.random() * data.length);
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <header>
        <h1 className='Navbar-Title'>Explore New York</h1>

        <div className='Navbar'>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } 
            to='/'>Home</NavLink>
        
          <a className='Nav-Link' href="/" 
          onClick={(e) => { 
            e.preventDefault();
            handleWhereNext(); 
            }}
          >
            Where Next
          </a>
        </div>
        {/* <div className='searchDisplay'>
        </div> */}
      </header>
    </div>
  )
};

export default Navbar;