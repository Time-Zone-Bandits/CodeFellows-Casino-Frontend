import {Component} from 'react';
import {Card} from 'react-bootstrap';


class Transaction extends Component {

  render() {
    return (
      <Card id="transaction-card" style={{width: '12rem', height: '9rem'}}>
        <Card.Body>
          <Card.Title>{this.props.winnings} Chips</Card.Title>
          <Card.Subtitle>{this.props.game}</Card.Subtitle>
          <Card.Text>
            Transaction performed on: {this.props.date}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Transaction;