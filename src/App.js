import React, { Component } from "react";
// import RaisedButton from 'material-ui/RaisedButton';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./App.css";

// STYLES //
const font = {
  fontFamily: 'Roboto',
  color: "white",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: this.props.titre,
      data: this.props.data,
      questionsList: this.props.data,
      random: 0,
      points: 0
    };


    this.print = data => {
      data.map((d, i) => console.log(`question n ${i} : ${d}`));
    };

    this.makeRandomNumber = r => {
      const temp = r;
      const random = Math.floor(Math.random() * this.props.data.length);
      return random !== temp ? random : 1;
    };

    this.compteur = () => {
      this.setState({ points: this.state.points+ 1 });
    };

    this.victory = () => {
      alert('VICTORY');
      this.setState({points: 0 });
    }

    this.algo = reponse => {
      (() => {
        this.props.data[this.state.random].good === reponse
        ? this.setState(this.compteur())
        : alert("|||  LOOSE |||");
      })();
    };
  }

componentDidUpdate(){
  this.state.points === 5 ?
  this.victory() :
  console.log('pas encore')
}

  render() {
    return (
      <div className="App" style={font}>
    
        <h1>
          {this.props.titre}
        </h1>

        <p>Question n° {this.state.random}</p>

        <h3>{this.props.data[this.state.random].question}</h3>

        <div>
          <p>{this.props.data[this.state.random].reponse[0]}</p>
        </div>

        <span>
          <button
            className="btn"
            id="btn"
            style={font}
            onClick={() => {
              this.algo(0);
              this.setState({
                random: this.makeRandomNumber(this.state.random)
              });
            }}
          >

          {
           this.props.data[this.state.random].reponse[0]          
          }          

          </button>
        </span>  

        <span>
          <button
            className="btn"
            id="btn"
            style={font}
            onClick={() => {
              this.algo(1);
              this.setState({
                random: this.makeRandomNumber(this.state.random)
              });
            }}
          >
          {this.props.data[this.state.random].reponse[1]}
          </button>
        </span>

        <div>
        <button
          className="btn"
          style={font}
          onClick={(actionOne, actionTwo) => {
            actionOne = this.setState({
              random: this.makeRandomNumber(this.state.random)
            });
            actionTwo = console.log("CA MARCHE !");
          }}
          >
          New Question
        </button>
          </div>

        <h3>points = {this.state.points}</h3>

      </div>
    );
  }
}

export default App;
