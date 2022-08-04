import {Component} from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {ListGroup} from 'react-bootstrap';

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "",
      email: "",
      chips: 0
    }
  }

  getUser = async () => {
    const url = this.props.url + '/user';
    const result = await this.props.axios.put(url);
    console.log(result.data);
    this.setState({
      name: result.data.name,
      email: result.data.email,
      chips: result.data.chips
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
      <ListGroup>
        <ListGroup.Item><h4>Player Name:</h4> {this.state.name}</ListGroup.Item>
        <ListGroup.Item><h4>Email:</h4> {this.state.email}</ListGroup.Item>
        <ListGroup.Item><h4>Wallet:</h4> ${this.state.chips}</ListGroup.Item>
      </ListGroup>
    )
  }

}

export default withAuth0(Profile);