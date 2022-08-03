// 'use strict';
import {Component} from 'react';
//import axios from 'axios';



class BlackjackDealer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hand: [],
      showHand: false,
    }
  }


  render() {
    return (
      <>
      <p>Dealer Cards Go Here</p>
      </>
    )
  }

}

export default BlackjackDealer;