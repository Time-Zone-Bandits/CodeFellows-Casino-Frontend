import {Component} from 'react';
import BlackjackForm from './BlackjackComponents/BlackjackForm';
import BlackjackDealer from './BlackjackComponents/BlackjackDealer';
import BlackjackUser from './BlackjackComponents/BlackjackUser';
import { withAuth0 } from '@auth0/auth0-react';



class Blackjack extends Component {
 
  render() {
    return (
      <>
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