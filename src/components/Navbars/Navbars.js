import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../assets/logo/logo-Laruno.png';
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <div className='Navbar'>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>
          <img src={logo} alt='logo' width='200' height='auto' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
            <Nav.Link to='#'>Login</Nav.Link>
            <Nav.Link to='#'>
              <span variant='primary'>Sign In</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;
