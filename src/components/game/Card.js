import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { connect } from 'react-redux';
import './Card.css';

const getStyle = background => ({
  width: 90,
  height: 90,
  borderRadius: '0.5rem',
  boxShadow: '4px 6px 33px 1px rgba(181,181,181,1)',
  background,
});

const cardFlip = (type, id) => ({
  type: 'CARD_FLIP',
  cardType: type,
  id,
});

const ping = () => ({
  type: 'AFTER_FLIP_PING',
});


const handleCardFlip = (dispatch, type, id) => {
  dispatch(cardFlip(type, id));
  setTimeout(() => {
    dispatch(ping());
  }, 500);
}

const Card = ({ type, id, flipped, active = true, dispatch}) => {
  const logo = require('../../assets/cards/' + type + '.png');
  return (
    <div className={active ? "active" : "hidden"} style={getStyle()} onClick={() => handleCardFlip(dispatch, type, id)}>
      <ReactCardFlip isFlipped={flipped}>
        <div style={getStyle("white")} key="front">
        </div>
        <div className="CardBack" style={getStyle("white")} key="back">
          <img src={logo} alt="logo" />
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default connect()(Card);
