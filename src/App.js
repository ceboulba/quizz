import React, { Component } from "react";
import "./App.css";

// STYLES //
const defaultStyle = {
  padding: "6px",
  margin: "2px",
  // backgroundColor: "lightGrey",
  border: "solid 1px grey",
  minWidth: "30px",
  height: "30px",
  color: "grey",
  fontWeight: "bold"
};
const typos = {
  fontFamily: "Roboto",
  color: "grey"
};

class App extends Component {
  constructor(props){
    super(props);
    this.state.questionsList = this.props.data
  }
  state = {
    random: 0,
    points: 0
  };
  
  

  ///   <FUNCTIONS>   ///
  makeRandomNumber = r => {
    const temp = r;
    const random = Math.floor(Math.random() * this.props.data.length);
    return random !== temp ? random : 1;
  };
  
  compteur = () => {
    this.setState({ points: this.state.points + 1 });
  };
  
  algo = reponse => {
    (() => {
      this.props.data[this.state.random].good === reponse
      ? this.setState(this.compteur())
      : alert("|||  LOOSE |||");
    })();
    this.state.points === 4
    ? (() => {
      alert("VICTOIRE");
      this.setState({ points: 0 });
    })()
    : (() => {
      console.log(`points:  ${this.state.points + 1} `);
    })();
  };
  
  print = data => {
    console.log(data);
  };
  
  componentDidMount() {
    this.print(this.props);
  }

  ///   <RENDER>    ///
  render() {
    return (
      <div className="App" style={typos}>
        <h1 style={defaultStyle} className="App-title">
          {this.state.titre}
        </h1>
        <div>
          <p>Question n° {this.state.random}</p>
          <h3>{this.props.data[this.state.random].question}</h3>
          <div>
            <p>{this.props.data[this.state.random].reponse}</p>
          </div>
          <span>
            <button
              style={defaultStyle}
              id="btn"
              onClick={() => {
                this.algo(0);
                this.setState({
                  random: this.makeRandomNumber(this.state.random)
                });
              }}
            >
              0
            </button>
          </span>

          <span>
            <button
              style={defaultStyle}
              id="btn"
              onClick={() => {
                this.algo(1);
                this.setState({
                  random: this.makeRandomNumber(this.state.random)
                });
              }}
            >
              1
            </button>
          </span>
        </div>
        <button
          style={defaultStyle}
          onClick={(actionOne, actionTwo) => {
            actionOne = this.setState({
              random: this.makeRandomNumber(this.state.random)
            });
            actionTwo = console.log("CA MARCHE !");
          }}
        >
          New Question
        </button>

        <div style={defaultStyle}>points = {this.state.points}</div>
      </div>
    );
  }
}

export default App;
