import {Component} from 'react';
import BlackjackForm from './components/Blackjack/BlackjackForm';
import BlackjackDealer from './components/Blackjack/BlackjackDealer';
import BlackjackUser from './components/Blackjack/BlackjackUser';



class Blackjack extends Component {
 
  render() {
    return (
      <>
      <BlackjackDealer/>
      <div id="spacer"></div>
      <BlackjackUser />
      <BlackjackForm/>
      </>
    )
  }


}

export default Blackjack;