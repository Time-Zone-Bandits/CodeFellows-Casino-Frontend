import './App.css';
import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Blackjack from './components/Blackjack';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './About';
import Profile from './components/Profile';
import PleaseLogin from './components/PleaseLogin';
import Roulette from './components/Roulette';
import HorseRace from './components/HorseRace';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



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
      const userUrl = url + '/user';
      const result = await axios.put(userUrl);
      this.setState({name: result.data.name, email: result.data.email})
    }
  }

  componentDidMount = async () => {
    await this.updateAuthHeader();
  }

  componentDidUpdate = async(prevState) => {
    await this.updateAuthHeader();
  }

  render(){
    return (
      <>
       
      <Router>
        <Header />
        
          <div className="App">  
            <Routes>
            {this.props.auth0.isAuthenticated ? 
              <Route path="/" element={<Blackjack axios={axios} url={url}/>} /> 
              : <Route path="/" element={<PleaseLogin/>}/>}

              {this.props.auth0.isAuthenticated ? 
              <Route path="/Blackjack" element={<Blackjack axios={axios} url={url}/>} /> 
              : <Route path="/Blackjack" element={<PleaseLogin/>}/>}

              {this.props.auth0.isAuthenticated ? 
              <Route path="/Profile" element={<Profile axios={axios} url={url}/>} /> 
              : <Route path="/Profile" element={<PleaseLogin/>}/>}

              {this.props.auth0.isAuthenticated ? 
              <Route path="/Roulette" element={<Roulette axios={axios} url={url}/>} /> 
              : <Route path="/Roulette" element={<PleaseLogin/>}/>}

              {this.props.auth0.isAuthenticated ? 
              <Route path="/HorseRace" element={<HorseRace axios={axios} url={url}/>} /> 
              : <Route path="/HorseRace" element={<PleaseLogin/>}/>}
              
              <Route path="/About" element={<About/>} />
            </Routes>
          </div>
          <Footer />
        </Router>        
        </>
    );
  }
}

export default withAuth0(App);
