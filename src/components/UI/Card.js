import React from 'react'
import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className; //props.className receive all the classes we pass to Card tag

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card
