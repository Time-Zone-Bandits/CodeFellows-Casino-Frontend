// 'use strict';
import {Component} from 'react';
//import axios from 'axios';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


class BlackjackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: 100,
      betInput: '',
      currentBet: null,
      gameOver: false
    }
  }

  newGame() {
    this.setState({
      wallet: 100,
      betInput: '',
      currentBet: null,
      gameOver: false,
    });
  }

  placeBet() {

    const betAmount = this.state.betInput;

    if (betAmount > this.state.wallet) {
      alert ('Insufficient funds.');
    } else if (betAmount % 1 !== 0){
      alert ('Please use whole numbers for your bet.')
    } else {
      const wallet = this.state.wallet - betAmount;
      this.setState({wallet, betInput: '', betAmount})
      console.log(this.state.wallet);
    }
  }

  handleChange(e) {
    const betInput = +e.target.value;
    this.setState({betInput});
  }

  componentDidMount() {
    this.newGame();
  }

  render() {
    return (
        <Form>
          <Button variant="secondary"onClick={() => {this.newGame()}}>New Game</Button>
          <Button variant="success">Hit</Button>
          <Button variant="danger">Stand</Button>
          <Form.Label>Wallet: ${this.state.wallet}</Form.Label>
          <Form.Control type="number" name="bet" placeholder="Bet Amount" value={this.state.betInput} onChange={this.handleChange.bind(this)}/>
          <Button onClick={() => {this.placeBet()}}>Place Bet</Button>
        </Form>
    )
  }
}

export default BlackjackForm;