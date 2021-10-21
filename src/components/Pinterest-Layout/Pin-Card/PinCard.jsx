import React from 'react';
import PinImage from './ImagePin/PinImage';
import PinUserInfo from './UserDataPin/PinUserInfo';

const PinCard = (props) => {
  const _stylesPinCard = {
    pin_card: {
      margin: 0,
      padding: '15px 10px',
      backgroundColor: 'white',
    },
    small: {
      gridRowEnd: 'span 36',
    },
    medium: {
      gridRowEnd: 'span 43',
    },
    large: {
      gridRowEnd: 'span 55',
    },
    description_pin: {
      height: '1.5em',
      width: '95%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontFamily: 'Roboto',
      fontSize: '15px',
      fontWeight: 800,
    },
  };

  return (
    <div style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}>
      <PinImage size={props.size} image={props.image} />
      <p style={_stylesPinCard.description_pin}>
        Laborum veniam laborum veniam officia aute quis esse ipsum aute ex in.
      </p>
      <PinUserInfo />
    </div>
  );
};

export default PinCard;
