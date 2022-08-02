import {Component} from 'react';
import BlackjackForm from './Blackjack/BlackjackForm';
import BlackjackDealer from './Blackjack/BlackjackDealer';
import BlackjackUser from './Blackjack/BlackjackUser';



class Blackjack extends Component {
  constructor(props) {
    super(props);
    }
  


  render() {
    return (
      <>
      <BlackjackForm/>
      <BlackjackDealer/>
      <BlackjackUser />
      </>
    )
  }


}

export default Blackjack;