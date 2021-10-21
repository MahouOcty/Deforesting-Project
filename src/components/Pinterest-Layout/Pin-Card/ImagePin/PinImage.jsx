import React, { useState } from 'react';
import PinHoverImage from './PinHoverImage';

// Este componente contiene la imagen del pin y el hover de la misma
const PinImage = (props) => {
  // Estado para el hover de la imagen
  const [hover, setHover] = useState('none');

  // Estos son los estilos propios de la imagen
  const _stylesPinImage = {
    pin_image_card: {
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: '1fr',
    },
    small: {
      gridRowEnd: 'span 26',
    },
    medium: {
      gridRowEnd: 'span 33',
    },
    large: {
      gridRowEnd: 'span 45',
    },
    image: {
      margin: 0,
      padding: 0,
      height: '100%',
      width: '100%',
      borderRadius: '16px',
      aspectRatio: 1,
      gridColumn: '1/2',
      gridRow: '1/2',
      zIndex: 0,
    },
    hoverPinImage: {
      width: '100%',
      height: '100%',
      gridColumn: '1/2',
      gridRow: '1/2',
      zIndex: 1,
    },
  };
  return (
    <div
      style={{
        ..._stylesPinImage.pin_image_card,
        ..._stylesPinImage[props.size],
      }}
    >
      <img
        src={props.image}
        style={_stylesPinImage.image}
        alt='img'
        onMouseEnter={() => setHover('grid')}
      />
      {/* Llamamos el hover desde otra clase, 
      sin embargo el encargado del estado es el PinImage, 
      como una clase principal.*/}
      <PinHoverImage
        style={_stylesPinImage.hoverPinImage}
        hover={hover}
        setHover={setHover}
      />
    </div>
  );
};

export default PinImage;
