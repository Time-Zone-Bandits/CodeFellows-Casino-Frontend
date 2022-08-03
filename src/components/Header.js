import {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import LoginLogout from './LoginLogout';
import {Link} from 'react-router-dom';

class Header extends Component {

  render() {
    return(
      <Navbar bg="dark" variant="dark" id="nav-bar">
        <Container>
          <Navbar.Brand id="brand">Welcome to Code Fellows Casino!</Navbar.Brand>
          <Nav className="header-nav">
            <Link to="/Blackjack" className="nav-link">Home</Link>
            <Link to="/Profile" className="nav-link">Profile</Link>
            <Link to="/About" className="nav-link">About Us</Link>
            <Nav.Link >{<LoginLogout/>}</Nav.Link>
          </Nav>
          
        </Container>
        
      </Navbar>

    )
  }
}

export default Header;