import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './Card.css';


class Card extends React.Component {
    constructor() {
      super();
      this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    getStyle(background) {
      return {
        width: 120,
        height: 120,
        borderRadius: '0.5rem',
        boxShadow: '4px 6px 33px 1px rgba(181,181,181,1)',
        background,
      }
    }
  
    styles = {
      container: {
        width: 120,
        height: 120,
      }
    }
   
    render() {
      return (
        <div style={this.styles.container}>
          <ReactCardFlip isFlipped={Math.random() >= 0.5}>
            <div style={this.getStyle("white")} key="front" onClick={this.handleClick}>
            </div>
            <div style={this.getStyle("blue")} key="back" onClick={this.handleClick}>
            </div>
        </ReactCardFlip>
        </div>
      )
    }
  }

export default Card;