import {Component} from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';   


class Blackjack extends Component {
  constructor(props){
    super(props);
    this.state = {
      gameInProgress: false,
      betField: 0,
      showAlert: false
    };
  }

  blackjackPost = async (e) => {
    const url = this.props.url+'/blackjack';
    console.log(url);
    const response = await this.props.axios.post(url,{bet: 100});
    console.log(response.data);
  };

  componentDidUpdate(){
    console.log(this.state.betField);
  }
  blackjackPutHit = async (e) => {
    const url = this.props.url+'/blackjack';
    console.log(url);
    const response = await this.props.axios.put(url, {choice: 'hit'});
    console.log(response.data);
  }

  blackjackPutStand = async (e) => {
    const url = this.props.url+'/blackjack';
    console.log(url);
    const response = await this.props.axios.put(url, {choice: 'stand'});
    console.log(response.data);
  }

  handleBetFieldChange = (e) => {
    this.setState({betField: parseInt(e.target.value)});
  }

  handleNewGame = (e) => {

  }

  handleHit = (e) => {

  }

  handleStand = (e) => {

  }

  render() {
    return (
      <>
      <section>
        <h1>Dealer Cards</h1>
        
      </section>
      <section>
        <h1>PLayer Cards</h1>
      </section>
      <button onClick={this.blackjackPost}>test blackjack post</button>
      <button onClick={this.blackjackPutHit}>test blackjack put 'hit'</button>
      <button onClick={this.blackjackPutStand}>test blackjack put 'stand'</button>

      <Form.Control type='input' placeholder="Bet Amount" onChange={this.handleBetFieldChange}/>
      <Alert show={this.state.showAlert} variant="danger" onClose={() => this.setState({showAlert: false})} dismissible>
        <Alert.Heading>
            Not Enough Funds
        </Alert.Heading>
        Please See Cashier
      </Alert>      
      <Button disabled={this.state.gameInProgress}>New Game</Button>
      <Button disabled={!this.state.gameInProgress}>Hit</Button>
      <Button disabled={!this.state.gameInProgress}>Stand</Button>

      </>
    )
  }


}

export default withAuth0(Blackjack);