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
            <Link to="/Blackjack">Home</Link>
            <Link to="/Roulette">Roulette</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/About">About Us</Link>
            <Nav.Link >{<LoginLogout/>}</Nav.Link>
          </Nav>
          
        </Container>
        
      </Navbar>

    )
  }
}

export default Header;