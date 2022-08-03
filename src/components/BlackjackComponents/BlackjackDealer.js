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
      <div id="card-d1"></div>
      <div id="card-d2"></div>
      <div id="card-d3"></div>
      <div id="card-d4"></div>
      <div id="card-d5"></div>
      </>
    )
  }

}

export default BlackjackDealer;