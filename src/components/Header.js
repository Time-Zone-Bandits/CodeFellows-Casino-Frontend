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

            <Link to="/Blackjack" ><button className="link">Blackjack</button></Link>
            <Link to="/Roulette" ><button className="link">Roulette</button></Link>
            <Link to="/HorseRace"><button className="link">Horse Race</button></Link>
            <Link to="/Profile" ><button className="link">Profile</button></Link>
            <Link to="/About" ><button className="link">About Us</button></Link>
            <Nav.Link >{<LoginLogout/>}</Nav.Link>
          </Nav>
          
        </Container>
        
      </Navbar>

    )
  }
}

export default Header;