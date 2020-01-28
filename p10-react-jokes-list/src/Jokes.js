import React from 'react';
import ReactDOM from 'react-dom';

function Jokes(props) {
  return (
    <div>
      <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
      <h3 style={{color: !props.question && "#c98c30"}}>Answer: {props.punchLine}</h3>
    </div>
  )
}

export default Jokes
