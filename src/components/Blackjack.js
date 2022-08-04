import {Component} from 'react';
import BlackjackForm from './BlackjackComponents/BlackjackForm';
import BlackjackDealer from './BlackjackComponents/BlackjackDealer';
import BlackjackUser from './BlackjackComponents/BlackjackUser';
import { withAuth0 } from '@auth0/auth0-react';



class Blackjack extends Component {
 
  blackjackPost = async (e) => {
    const url = this.props.url+'/blackjack';
    console.log(url);
    const response = await this.props.axios.post(url,{bet: 100});
    console.log(response.data);
  };

  blackjackPutHit = async (e) => {
    const url = this.props.url+'/blackjack';
    console.log(url);
    const response = await this.props.axios.put(url, {choice: 'hit'});
    console.log(response.data);
  }

  blackjackPutStand = async (e) => {
    const url = this.props.url+'/blackjack';
    console.log(url);
    const response = await this.props.axios.put(url, {choice: 'stand'});
    console.log(response.data);
  }

  render() {
    return (
      <>
      <button onClick={this.blackjackPost}>test blackjack post</button>
      <button onClick={this.blackjackPutHit}>test blackjack put 'hit'</button>
      <button onClick={this.blackjackPutStand}>test blackjack put 'stand'</button>
      <h1>Blackjack</h1>
      <BlackjackDealer/>
      <div id="spacer"></div>
      <BlackjackUser />
      <BlackjackForm/>
      </>
    )
  }


}

export default withAuth0(Blackjack);