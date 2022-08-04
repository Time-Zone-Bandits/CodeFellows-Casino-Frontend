import {Component} from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {ListGroup} from 'react-bootstrap';
import Transaction from './Transaction';
import {Container, Row, Col} from 'react-bootstrap'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "",
      email: "",
      chips: 0,
      transactions: []
    }
  }

  getUser = async () => {
    const url = this.props.url + '/user';
    const result = await this.props.axios.get(url);
    console.log(result.data);
    this.setState({
      name: result.data.user.name,
      email: result.data.user.email,
      chips: result.data.user.chips,
      transactions: result.data.transactions
    })
  }

  async componentDidMount(){
      await this.getUser()
  }

  async componentDidUpdate(prevState){
    if (this.state.name === ""){
      await this.getUser();
    }
  }

  render() {
    return (
      <>
      <ListGroup>
        <ListGroup.Item><h4>Player Name:</h4> {this.state.name}</ListGroup.Item>
        <ListGroup.Item><h4>Email:</h4> {this.state.email}</ListGroup.Item>
        <ListGroup.Item><h4>Wallet:</h4>{this.state.chips} Chips</ListGroup.Item>
      </ListGroup>
      <Container fluid id="transactions-container">
        <Row sm={3} md={5} lg={6} xl={7}>
        {this.state.transactions.map (win =>
          <Col>
            <Transaction
              date={win.date.slice(0,10)} 
              game={win.game} 
              winnings={win.winnings}
            />
          </Col>
          )}
        </Row>
      </Container>
      
      </>
    )
  }
}

export default withAuth0(Profile);