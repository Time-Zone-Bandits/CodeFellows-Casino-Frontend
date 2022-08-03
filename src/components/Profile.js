import {Component} from 'react';
import { withAuth0 } from '@auth0/auth0-react';

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
    const result = await this.props.axios.put(url, {chips: 5000});
    console.log(result.data);
    this.setState({
      name: result.data.name,
      email: result.data.email,
      chips: result.data.chips
    })
  }

  componentDidMount(){
      this.getUser()
  }

  render() {
    return (
      <>
      <p>User Name: {this.state.name}</p>
      <p>User Email: {this.state.email}</p>
      <p>Chips: {this.state.chips}</p>
      </>
    )
  }

}

export default withAuth0(Profile);