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
      <div id="card1"></div>
      <div id="card2"></div>
      <div id="card3"></div>
      <div id="card4"></div>
      <div id="card5"></div>
      </>
    )
  }

}

export default BlackjackDealer;