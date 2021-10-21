import React from 'react';
import PinCard from '../Pin-Card/PinCard';

// Contenedor principal de nuestros pines
const PinLayout = () => {
  // Estilos propios del contenedor principal
  const _stylesLayout = {
    pin_container: {
      margin: 0,
      padding: 0,
      width: '95vw',
      backgroundColor: 'white',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 250px)',
      gridAutoRows: '10px',
      justifyContent: 'center',
    },
  };

  return (
    <div style={_stylesLayout.pin_container}>
      <PinCard size='small' image='https://picsum.photos//250/260' />
      <PinCard size='medium' image='https://picsum.photos//250/330' />
      <PinCard size='large' image='https://picsum.photos//250/450' />
      <PinCard size='small' image='https://picsum.photos//250/261' />
      <PinCard size='medium' image='https://picsum.photos//250/331' />
      <PinCard size='large' image='https://picsum.photos//250/451' />
      <PinCard size='small' image='https://picsum.photos//250/262' />
      <PinCard size='medium' image='https://picsum.photos//250/332' />
      <PinCard size='large' image='https://picsum.photos//250/452' />
      <PinCard size='small' image='https://picsum.photos//250/259' />
      <PinCard size='medium' image='https://picsum.photos//250/333' />
      <PinCard size='large' image='https://picsum.photos//250/453' />
      <PinCard size='small' image='https://picsum.photos//250/258' />
      <PinCard size='medium' image='https://picsum.photos//250/334' />
      <PinCard size='large' image='https://picsum.photos//250/454' />
      <PinCard size='small' image='https://picsum.photos//250/263' />
      <PinCard size='medium' image='https://picsum.photos//250/335' />
      <PinCard size='large' image='https://picsum.photos//250/455' />
      <PinCard size='small' image='https://picsum.photos//250/257' />
      <PinCard size='medium' image='https://picsum.photos//250/336' />
      <PinCard size='large' image='https://picsum.photos//250/456' />
    </div>
  );
};

export default PinLayout;
