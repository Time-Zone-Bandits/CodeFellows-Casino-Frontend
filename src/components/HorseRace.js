import { Component } from "react";
import { Animate } from "react-simple-animate";
import { withAuth0 } from '@auth0/auth0-react';
import { Form } from "react-bootstrap";
import horseIcon from '../img/horseback.png';

const imgStyle = {
    display: "block",
    width: 100,
    height: 100,
    borderRadius: "10px"
};
  
const buttonStyle = {
    display: "block",
    height: 30,
    width: 100,
    fontSize: 15,
    marginTop: 20
};

class HorseRace extends Component {
  constructor(props){
    super(props)
    this.state = {
      play: false,
      horses: [1,2,3,4],
      winStatus: null,
      showWinner: false
    };
  }


  handleRaceStart = async (e) => {
    e.preventDefault();
    let winnerChoice = 0;
    for (let i = 0; i < this.state.horses.length; i++){
      if (e.target[i].checked){
        winnerChoice = i;
      }
    }
    if(this.state.winStatus === null){
      let response = await this.props.axios.post(this.props.url+'/horserace', {winner: winnerChoice});
      console.log(response.data.winStatus);
      this.setState({horses: response.data.times, winStatus: response.data.winStatus, showWinner: true, play: true});
    }
  }

  render() {
    return (
      <>
        <div id="horse-path">
        {this.state.horses.map((t, i) => 
          <div id={'horse'+i}>
            <Animate
              key={i.toString()}
              play={this.state.play}
              duration={t}
              delay={0.2}
              start={{transform: "translateX(0px)"}}
              end={{ transform: "translateX(90vw)" }}
              >
              <img alt='horse icon' src={horseIcon} style={imgStyle} />
            </Animate>
          </div>
        )}
        </div>
        <Form id="horse-form" onSubmit={this.handleRaceStart}>
          {this.state.horses.map((h, i) =>
            <div id={'radio'+i}>
            <Form.Check
              key={h.toString()}
              inline
              label={`Horse: ${i + 1}`}
              name="betting"
              type="radio"
              id={`checkbox-${i + 1}`}
            />  
            </div>
          )}
          <button type="submit" style={buttonStyle}> Play </button>
          <button onClick={() => window.location.reload()} style={buttonStyle}>Reload</button>
          <Animate
              play={this.state.play}
              duration={Math.max(...this.state.horses) * 2}
              delay={0.2}
              start={{opacity: "0"}}
              end={{ transform: "1" }} 
              >
              <h2 id="horse-win"> {this.state.winStatus ? 'You Won 60 Chips' : 'You Lost 20 Chips'}</h2>
            </Animate>
        </Form>
      </>
    );
  }
}

export default withAuth0(HorseRace);