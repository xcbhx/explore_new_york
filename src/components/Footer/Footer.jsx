import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { text: 'About Us', url: '/about' },
    { text: 'Privacy Policy', url: '/privacy' }
  ]
  
  return (
    <main className='Footer'>
      <p>&copy; Ceina Ellison { currentYear }</p>
      <ul className='footerLinks'>
        {footerLinks.map((link) => (
          <li key={link.text}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
};

export default Footer;