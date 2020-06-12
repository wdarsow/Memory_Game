import React from 'react';
import "../styles/Main.css";
import bear from "../images/bear.png";
import beaver from "../images/beaver.png";
import bird from "../images/bird.png";

function Score(props) {
    return <h1>Current score is: {props.currentScore}</h1>
}

const borderStyle = {
    border: "5px solid black",
    backgroundColor: "red"
}

class CurrentTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}; 
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                {/* this sets the date with PROPS 
                <h1>The current time is: {this.props.date.toLocaleTimeString()} </h1> */}

                {/* this sets the date with STATE instead */}
                <h1>The current time is: {this.state.date.toLocaleTimeString()} </h1>
                
            </div>
        ) 
    }
}

//const Main = () => (
class Main extends React.Component {
    render() {

        function colorChange() {
            // if(img.src) {
            //     console.log("it's true");
            // }
            console.log("the button was clicked")        
        }

        return(
            <main className = "main-container">

                <div className="container">

                    <div className="row">
                        <div className="col-sm">
                            <img onClick={colorChange} src={bear} alt="bear" style={borderStyle} key={10}></img>
                        </div>
                        <div className="col-sm">
                            <img src={beaver} alt="beaver" style={borderStyle}></img>
                        </div>
                        <div className="col-sm">
                            <img src={bird} alt="beaver" style={borderStyle}></img>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-sm">
                            <Score currentScore={1} />
                        </div>
                        <div className="col-sm">
                            This is a clock
                            <CurrentTime />
                        </div>
                        <div className="col-sm">
                            row 2 column 3
                        </div>
                    </div>

                </div>
            </main>
        )
    }
}
// setInterval(new CurrentTime(), 1000);

export default Main;