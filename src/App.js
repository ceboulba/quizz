import React, { Component } from "react";
import "./App.css";

// STYLES //
const defaultStyle = {
  padding: "6px",
  margin: "2px",
  backgroundColor: "lightGrey",
  border: "solid 1px #BADA55",
  minWidth: "30px",
  height: "30px",
  color: "grey",
  fontWeight: "bold"
};

class App extends Component {
  state = {
    titre: this.props.titre,
    questionsList: [
      {
        question: "Quel est ton prénom?",
        reponse: "|Antoine | Hector|",
        good: 0
      },
      {
        question: "Où habites-tu ?",
        reponse: "New-york | Longechenal",
        good: 1
      },
      {
        question: "Quel est ton age ?",
        reponse: "63 ans | 36 ans",
        good: 1
      },
      {
        question: "Combien d'enfants as tu ?",
        reponse: "1 | 2",
        good: 1
      },
      {
        question: "Quel est le prénom de ta femme ?",
        reponse: "Priscille | Marise",
        good: 0
      },
      {
        question: "Quel est le prénom de ta fille ?",
        reponse: "Lola | Ginette",
        good: 0
      },
      {
        question: "Quel âge a ton fils ?",
        reponse: "10 ans | 8 ans",
        good: 1
      }
    ],
    random: 0,
    points: 0
  };

  ///   <FUNCTIONS>   ///
  makeRandomNumber = r => {
    const temp = r;
    const random = Math.floor(Math.random() * this.state.questionsList.length);
    return random !== temp ? random : 1;
  };

  compteur = p => {
    if (this.state.points > 4) {
      alert('WIN WIN WIN');
      this.setState({points : 0})
    }
    console.log("GAGNE");
    return p + 1;
  };

  algo = (reponse, win) => {
    return this.state.questionsList[this.state.random].good === reponse ?
       this.setState({ points : this.state.points + 1 }) :
       alert("|||  LOOSE |||");
       {
          if (this.state.points === 5){
         alert(`T'as gagné`)
       } 

      }
  };

  // algo = reponse => {
  //   this.state.questionsList[this.state.random].good === reponse
  //     ? this.setState({ points: this.compteur(this.state.points) })
  //     : // alert("!!!  WIN  !!!")
  //       alert("|||  LOOSE |||");
  // };

  ///   <COMPONENT DID MOUNT>   ///
  componentDidMount() {
    // this.compteur(this.state.points);
    // this.setState({ random: this.makeRandomNumber(this.state.random) });
  }

  ///   <RENDER>    ///
  render() {
    return (
      <div className="App">
        <h1 style={defaultStyle} className="App-title">
          {this.state.titre}
        </h1>
        <div>
          <p>
            Question n° {this.state.random}
          </p>
          <h3>
            {this.state.questionsList[this.state.random].question}
          </h3>
          <div>
            <p>
              {this.state.questionsList[this.state.random].reponse}
            </p>
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
          // onClick={() => {
          //   this.setState({ random: this.makeRandomNumber(this.state.random) });
          // }}
        >
          New Question
        </button>

        <div style={defaultStyle}>
          points = {this.state.points}
        </div>
      </div>
    );
  }
}

export default App;
