import React from 'react';
import "./Card.css";

const Card = props => (
    <div
        role="img"
        aria-label="card-item"
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
        className={`card-item${props.shake ? " shake" : "" } `}
    />
);

export default Card;
