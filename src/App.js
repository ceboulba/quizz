import React, { Component } from "react";
// import "./App.css";

// STYLES //
const defaultStyle = {
  padding: "6px",
  margin: "2px",
  minWidth: "30px",
  height: "30px",
  color: "white",
  fontWeight: "bold"
};
const typos = {
  fontFamily: "Roboto",
  color: "#000"
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

    console.log(this.props);

    this.print = data => {
      data.map((d, i) => console.log(`question n ${i} : ${d}`));
    };

    this.makeRandomNumber = r => {
      const temp = r;
      const random = Math.floor(Math.random() * this.props.data.length);
      return random !== temp ? random : 1;
    };

    this.compteur = () => {
      this.setState({ points: this.state.points + 1 });
    };

    this.algo = reponse => {
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
  }

  render() {
    return (
      <div className="App" style={typos}>
        <h1 className="title is-1 has-text-white">
          {this.props.titre}
        </h1>
        <p>Question n° {this.state.random}</p>
        <h3 className="subtitle is-3 has-text-white is-uppercase">{this.props.data[this.state.random].question}</h3>
        <div>
          <p className="subtitle is-4 has-text-white">{this.props.data[this.state.random].reponse}</p>
        </div>
        <span>
          <button
            className="button"
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
            className="button"
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
        <div>

        <button
          className="button"
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
        <h3 style={defaultStyle}>points = {this.state.points}</h3>
      </div>
    );
  }
}

export default App;
