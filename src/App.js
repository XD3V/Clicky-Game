import React, { Component } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Card from "./components/Card"
// import cardsList from "../src/components/ImageHolder";
import cardsList from "./cards.json";


class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    // cards: cardsList,
    cards: cardsList,
    // unselectedCards: cardsList
    selectedCards: []
  }
  // this funtion generates a randomly shuffles the 
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectCard = deal => {
    // const findCard = this.state.selectedCards.find(item => item.deal === deal);
    const findCard = this.state.selectedCards.indexOf(deal);
    // console.log(findCard);

    if (findCard !== -1) {
      // failure to select a new card
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        cards: cardsList,
        selectedCards: []
      });
    }
    else {
      // success to select a new card
      // const newCards = this.state.unselectedCards.filter(item => item.deal !== deal);
      let cardArray = this.state.selectedCards;
      cardArray.push(deal);


      this.setState({
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
        cards: cardsList,
        selectedCard: cardArray,
      });
    }

    this.shuffleArray(cardsList);
  };

  render() {
    return (
      <Background>
        <Navbar
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        {/* <Navbar /> */}
        {cardsList.map(card =>
          <Card
            className="col-4"
            key={card.id}
            id={card.id}
            // deal={this.state.cards.deal}
            image={card.image}
            selectCard={this.selectCard}
            // curScore={this.state.curScore}
            // animals={this.state.cards}
            name={card.name}
          />
        )
        }
        <Footer />
      </Background>
    );
  }
}



export default App;