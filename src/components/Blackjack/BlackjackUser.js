// 'use strict';
import {Component} from 'react';
import axios from 'axios';



class BlackjackUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hand: [],
    }
  }


  render() {
    return (
      <>
      <p>User Cards Go Here</p>
      
      </>
    )
  }


}

export default BlackjackUser;