import {Component} from 'react';
import BlackjackForm from './Blackjack/BlackjackForm';



class Blackjack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hand: [],
    }
  }


  render() {
    return (
      <>
      <BlackjackForm/>
      
      </>
    )
  }


}

export default Blackjack;