import './App.css';
import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import LoginLogout from './components/LoginLogout';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {name: '', email: ''};
  }
  
  //we already have the name and meail from withAuth, but this verifies the server is getting it!
  getUser = async () => {
    let response = await axios.get(process.env.REACT_APP_SERVER+'/test');
    this.setState({name: response.data.name, email: response.data.email});
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
  }
  
  render(){
    return (
      <div className="App">
          <LoginLogout />
          <button onClick={this.getUser}>Get User</button>
          <p>{this.state.name}</p>
          <p>{this.state.email}</p>
      </div>
    );
  }
}

export default withAuth0(App);
