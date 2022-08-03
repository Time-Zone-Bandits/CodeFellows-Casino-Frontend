import {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import LoginLogout from './LoginLogout';

class Header extends Component {

  render() {
    return(
      <Navbar bg="dark" variant="dark" id="nav-bar">
        <Container>
          <Navbar.Brand id="brand">Welcome to Code Fellows Casino!</Navbar.Brand>
          <Nav className="header-nav">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link>Profile</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link >{<LoginLogout/>}</Nav.Link>
          </Nav>
          
        </Container>
        
      </Navbar>

    )
  }
}

export default Header;