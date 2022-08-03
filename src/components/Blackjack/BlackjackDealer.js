// 'use strict';
import {Component} from 'react';
//import axios from 'axios';
import ph from './img/card-ph.gif';



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
      <img src={ph} title="placeholder" alt="placeholder" className="ph-card"/>
      <img src={ph} title="placeholder" alt="placeholder" className="ph-card"/>
      <img src={ph} title="placeholder" alt="placeholder" className="ph-card"/>
      <img src={ph} title="placeholder" alt="placeholder" className="ph-card"/>
      <img src={ph} title="placeholder" alt="placeholder" className="ph-card"/>
      </>
    )
  }

}

export default BlackjackDealer;