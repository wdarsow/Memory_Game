import React from 'react';
import Header from '../Header';
import Navbar from '../Navbar/Navbar.js';
import Container from '../Container';
import Footer from '../Footer';
import Card from '../Card';
import gameData from '../../gameData.json';
import './MainGame.css';

class MainGame extends React.Component {
    state = {
        gameData,
        score: 0,
        topScore: 0
    }

    componentDidMount() {
        this.setState({ gameData: this.shufflerFunc(this.state.gameData) })
    }

    goodGuess = newData => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = newScore > topScore ? newScore : topScore;
        this.setState({
            gameData: this.shufflerFunc(newData),
            score: newScore,
            topScore: newTopScore
        });
    };

    badGuess = badData => {
        this.setState({
            gameData: this.dataReset(badData),
            score: 0
        });
    };

    dataReset = badData => {
        const dataReset = badData.map(item => ({ ...item, clicked: false }));
        return this.shufflerFunc(dataReset);
    }

    shufflerFunc = gameData => {
        let i = gameData.length - 1;
        while (i > 0) {
            const k = Math.floor(Math.random() * (i + 1));
            const placeHolder = gameData[i];
            gameData[i] = gameData[k];
            gameData[k] = placeHolder;
            i--;
        }
        return gameData;
    }

    handleClick = id => {
        let correctGuess = false;
        const newData = this.state.gameData.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    correctGuess = true;
                }
            }
            
            return newItem;
        });
        correctGuess ? this.goodGuess(newData) : this.badGuess(newData);
    };

    render() {
        return (
            <div className="mainDiv">
                <Navbar score={this.state.score} topScore={this.state.topScore} />
                <Header />
                <Container>
                    {this.state.gameData.map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            shake={!this.state.score && this.state.topScore}
                            handleClick={this.handleClick}
                            image={item.image}
                        />
                    ))}
                </Container>
                <Footer />
            </div>
        )
    }
}

export default MainGame; 