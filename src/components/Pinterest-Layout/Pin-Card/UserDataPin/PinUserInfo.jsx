import React, { useState } from 'react';

// Componente de la informacion del usuario
const PinUserInfo = () => {
  // Estado del hover del texto de usuario
  const [underlineText, setUnderlineText] = useState('none');

  // Estilos propios del usuario
  const _stylesUserInfo = {
    userData: {
      display: 'flex',
      cursor: 'pointer',
    },
    user_profile_image: {
      height: '50px',
      width: '50px',
      borderRadius: '50%',
    },
    user_profile_name: {
      marginLeft: '7px',
      height: '1.5em',
      width: '60%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: 400,
      textDecoration: `${underlineText}`,
    },
  };
  return (
    <div
      style={_stylesUserInfo.userData}
      onMouseEnter={() => setUnderlineText('underline')}
      onMouseOut={() => setUnderlineText('none')}
    >
      <img
        src='https://picsum.photos//50/50'
        alt='img'
        style={_stylesUserInfo.user_profile_image}
        onMouseEnter={() => setUnderlineText('underline')}
      />
      <p
        style={_stylesUserInfo.user_profile_name}
        onMouseEnter={() => setUnderlineText('underline')}
      >
        Esse in voluptate reprehenderit et.
      </p>
    </div>
  );
};

export default PinUserInfo;
