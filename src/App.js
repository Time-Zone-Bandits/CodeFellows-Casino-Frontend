import './App.css';
import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import LoginLogout from './components/LoginLogout';
import Blackjack from './Blackjack';

const url = process.env.REACT_APP_SERVER;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {name: '', email: ''};
  }

  async updateAuthHeader(){
    if (this.props.auth0.isAuthenticated) {
      const r = await this.props.auth0.getIdTokenClaims();
      axios.defaults.headers.common['Authorization'] = `Bearer ${r.__raw}`;
    }
  }

  componentDidMount = async () => {
    this.updateAuthHeader();
  }

  componentDidUpdate = async(prevState) => {
    this.updateAuthHeader();
    if (this.props.auth0.isAuthenticated) {
      let userPost = await axios.post(url + `/user`);
      console.log(userPost);
    }
  }

  render(){
    return (
      <div className="App">
          <LoginLogout />  
          {this.props.auth0.isAuthenticated ? <Blackjack /> : '    Please login to play'}
      </div>
    );
  }
}

export default withAuth0(App);
