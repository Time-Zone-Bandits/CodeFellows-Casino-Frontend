import {Component} from 'react';
import BlackjackForm from './components/Blackjack/BlackjackForm';
import BlackjackDealer from './components/Blackjack/BlackjackDealer';
import BlackjackUser from './components/Blackjack/BlackjackUser';



class Blackjack extends Component {
  constructor(props) {
    super(props);
    }
  


  render() {
    return (
      <>
      <BlackjackDealer/>
      <BlackjackUser />
      <BlackjackForm/>
      </>
    )
  }


}

export default Blackjack;