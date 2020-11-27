import React from 'react';
import './NavbarMessage.css';

class NavbarMessage extends React.Component {
    state = {
        navMessage: "",
        movement: false
    }

    componentDidUpdate(prevProps, score, topScore) {
        const newState = { 
            movement: true
         };
        if (this.props.score === 0 && this.props.topScore === 0) {
            newState.navMessage = "";
        } else if (this.props.score === 0 && this.props.topScore > 0) {
            newState.navMessage = "wrong";
        } else {
            newState.navMessage = "perfect";
        }

        if (this.props.score !== prevProps.score) {
            this.setState(newState, () => {
                setTimeout(() => this.setState({ 
                    movement: false
                }), 500)
            })
        }
    }


    renderNavbarMessage = () => {
        switch (this.state.navMessage) {
            case "perfect":
                return "You were right!";
            case "wrong":
                return "You were wrong!";
            default:
                return "Click an image to begin!!";
        }
    };

    render() {
        return (
            <li className={this.state.movement ? this.state.navMessage : ""}>
                {this.renderNavbarMessage()}
            </li>
        );
    }
}

export default NavbarMessage;