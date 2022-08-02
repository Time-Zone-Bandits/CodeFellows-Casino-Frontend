// 'use strict';
import {Component} from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


class BlackjackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: 0,
    }
  }


  render() {
    return (

        <Form>
          <Button>New Game</Button>
          <Button>Hit</Button>
          <Button>Stand</Button>
          <Form.Label>Wallet: ${this.state.wallet}</Form.Label>
          <Form.Control type="number" placeholder="Bet Amount"/>
          <Button>Place Bet</Button>
        </Form>
      
    )
  }
}

export default BlackjackForm;