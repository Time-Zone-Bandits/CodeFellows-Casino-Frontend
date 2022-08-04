import {Component} from 'react';
import {Card} from 'react-bootstrap';


class Transaction extends Component {

  render() {
    return (
      <Card style={{width: '15rem'}}>
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