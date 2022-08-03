import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react'
import { Wheel } from 'react-custom-roulette'

class Roulette extends Component {
    constructor(props){
        super(props);
        this.state = {
            board: this.makeBoard(), 
            mustSpin: false,
            winningNumber: 0,
            wheelData: this.makeData(),
            name: 'Please Enter Yourself in the Game',
            chips: 0,
            winnings: 0
        };
    }

    makeBoard(){
        const board = {};
        for (let i=0; i <= 36; i++){
            board[i.toString()] = 0;
        }
        board['odds'] = 0;
        board['evens'] = 0;
        return board;
    }

    makeData() {
        let data = [];
        for (let n = 0; n <= 36; n++){
            if (n === 0){
                data.push({option: n.toString(), style: {backgroundColor: 'green', textColor: 'white'}});
            } else if (n % 2 === 0){
                data.push({option: n.toString(), style: {backgroundColor: 'black',  textColor: 'white'}})
            } else {
                data.push({option: n.toString(), style: {backgroundColor: 'red',  textColor: 'white'}});
            }
        }
        return data;
    }

    addBet = (betKey) => {
        const board = {...this.state.board};
        let totalBet = Object.values(board).reduce((prev, curr) => curr + prev, 0);
        if (totalBet < this.state.chips){
            board[betKey] += 10;
        }
        this.setState({board: board});
    }

    getUser = async () => {
        const url = this.props.url + '/user';
        const result = await this.props.axios.put(url)
        this.setState({name: result.data.name, chips: result.data.chips})
    }

    handleSpinClick = async (e) => {
        const url = this.props.url + '/roulette';
        console.log(url);
        const result = await this.props.axios.put(url, this.state.board);
        let newChips = result.data.chips;
        console.log(result.data);
        let newWinningNumber = result.data.newWinningNumber;
        let winnings = (newChips - this.state.chips) + this.state.winnings;
        this.setState({winningNumber: newWinningNumber, chips: newChips, winnings: winnings, board: this.makeBoard(), mustSpin: true})
    }

    render() {
        return (
            <Container>
                <h1>Hello, {this.state.name}. You have {this.state.chips} chips remaining.</h1>
                <h2>Winnings: {this.state.winnings}</h2>
                {(this.state.wheelData) && <Wheel
                    mustStartSpinning={this.state.mustSpin}
                    prizeNumber={this.state.winningNumber}
                    data={this.state.wheelData}
                    onStopSpinning={() => {
                        this.setState({mustSpin:false});
                      }}
                />}
                <Button onClick={this.getUser}>Enter Yourself in Game</Button>
                <Button onClick={this.handleSpinClick}> SPIN - Place Bets First</Button>
                <Row sm={2} md={3} lg={4} xl={5}>
                    {Object.keys(this.state.board).map(k => 
                        <Button key={k} onClick={e => this.addBet(k)} style={{width: "10rem", margin: "1rem"}}>{k}, Bet: {this.state.board[k]}</Button>
                    )}
                </Row>
            </Container>
        )
    }
}
export default withAuth0(Roulette);