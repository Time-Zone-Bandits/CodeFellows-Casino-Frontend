
import {Component} from 'react';


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
      <div id="card1"></div>
      <div id="card2"></div>
      <div id="card3"></div>
      <div id="card4"></div>
      <div id="card5"></div>
      </>
    )
  }


}

export default BlackjackUser;