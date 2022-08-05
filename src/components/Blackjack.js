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
      showAlert: false,
      userHand: [],
      dealerHand: [],
      userScore: 0,
      dealerScore: 0,
      winStatus: "",
      winnings: 0
    };
  }

  blackjackPost = async (e) => {
    const url = this.props.url+'/blackjack';
    console.log(url);
    const response = await this.props.axios.post(url,{bet: this.state.betField});
    console.log(response.data);

    let dealerHand = response.data.dealersCards
    let userHand = response.data.playersCards
    let userScore = response.data.playerScore
    let dealerScore = response.data.dealerScore
    let winStatus = response.data.winStatus
    let winnings = response.data.winnings

    this.setState({
      userHand:userHand,
      dealerHand: dealerHand,
      userScore: userScore,
      dealerScore: dealerScore,
      winStatus: winStatus,
      gameInProgress: true,
      winnings: winnings
    })

    if(winStatus !== 'no winner') {
      this.setState({gameInProgress: false})
    }
  };

  componentDidUpdate(){
    console.log(this.state.betField);
  }

  blackjackPutHit = async (e) => {
    const url = this.props.url+'/blackjack';
    console.log(url);
    const response = await this.props.axios.put(url, {choice: 'hit'});
    console.log(response.data);

    let dealerHand = response.data.dealersCards
    let userHand = response.data.playersCards
    let userScore = response.data.playerScore
    let dealerScore = response.data.dealerScore
    let winStatus = response.data.winStatus
    let winnings = response.data.winnings

    this.setState({
      userHand:userHand,
      dealerHand: dealerHand,
      userScore: userScore,
      dealerScore: dealerScore,
      winStatus: winStatus,
      gameInProgress: true,
      winnings: winnings
    })

    if(winStatus !== 'no winner') {
      this.setState({gameInProgress: false})
    }
  }

  blackjackPutStand = async (e) => {
    const url = this.props.url+'/blackjack';
    console.log(url);
    const response = await this.props.axios.put(url, {choice: 'stand'});
    console.log(response.data);

    let dealerHand = response.data.dealersCards
    let userHand = response.data.playersCards
    let userScore = response.data.playerScore
    let dealerScore = response.data.dealerScore
    let winStatus = response.data.winStatus
    let winnings = response.data.winnings

    this.setState({
      userHand:userHand,
      dealerHand: dealerHand,
      userScore: userScore,
      dealerScore: dealerScore,
      winStatus: winStatus,
      gameInProgress: false,
      winnings: winnings
    })
  }

  handleBetFieldChange = async (e) => {
    const value = parseInt(e.target.value);
    const result = await this.props.axios.put(this.props.url+'/user');
    if (result.data.chips < value){
      this.setState({showAlert: true})
    }
    this.setState({betField: value});
  }

  displayWinnings = () => {
    if (this.state.gameInProgress){
      return (
        <section></section>
      )
    } else {
      return (
        <section>
          <h1>Game Status: {this.state.winStatus}</h1>
          <h2>Winnings: {this.state.winnings}</h2>
        </section>
      )
    }
  }

  render() {
    return (
      <div id='blackjackbody'>
      <section>
        <h1>Dealer: {!this.state.gameInProgress ? this.state.dealerScore : ''}</h1>
        {!this.state.gameInProgress ? this.state.dealerHand.map((card, idx) => 
          <img key={idx.toString()} alt='card' src={card.image} />
          ) : <img alt='card' src={this.state.dealerHand[0].image} />}
      </section>
      <section>
        <h1>Player: {this.state.userScore}</h1>
        {this.state.userHand.map((card, idx) => 
          <img key={idx.toString()} alt='card' src={card.image} />
          )}
      </section>
      {this.displayWinnings()}

      <Form.Control type='input' placeholder="Bet Amount" onChange={this.handleBetFieldChange} />
      <Alert show={this.state.showAlert} variant="danger" onClose={() => this.setState({showAlert: false})} dismissible>
        <Alert.Heading>
            Not Enough Funds
        </Alert.Heading>
        Please See Cashier
      </Alert>      
      <Button onClick={this.blackjackPost} disabled={this.state.gameInProgress}>New Game</Button>
      <Button onClick={this.blackjackPutHit} disabled={!this.state.gameInProgress}>Hit</Button>
      <Button onClick={this.blackjackPutStand} disabled={!this.state.gameInProgress}>Stand</Button>

      </ div>
    )
  }


}

export default withAuth0(Blackjack);