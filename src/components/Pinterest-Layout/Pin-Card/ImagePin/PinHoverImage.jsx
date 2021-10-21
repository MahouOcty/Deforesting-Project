import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// Componente del hover de la imagen
const PinHoverImage = (props) => {
  // Estado para el boton de guardar
  const [saveButton, setSaveButton] = useState('#E60023');
  // Estado para el boton de compartir
  const [shareButton, setShareButton] = useState('.8');
  // Estado para el boton de opciones
  const [optionsButton, setOptionsButton] = useState('.8');

  // Estilos propios del hover de la imagen
  const _stylesPinHoverImage = {
    hover_container: {
      display: props.hover,
    },
    shadow: {
      margin: 0,
      padding: 0,
      borderRadius: '16px',
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      opacity: '.4',
      cursor: 'zoom-in',
      gridColumn: '1/2',
      gridRow: '1/2',
      zIndex: 1,
    },
    save_button: {
      height: '45px',
      width: '40%',
      backgroundColor: `${saveButton}`,
      marginTop: '10px',
      marginRight: '10px',
      marginLeft: 'auto',
      marginBottom: 'auto',
      border: 'none',
      color: 'white',
      fontFamily: 'Roboto',
      textAlign: 'center',
      cursor: 'pointer',
      textDecoration: 'center',
      fontSize: '14px',
      fontWeight: 700,
      borderRadius: '75px',
      gridColumn: '1/2',
      gridRow: '1/2',
      zIndex: 2,
    },
    icon_button: {
      height: '32px',
      width: '32px',
      borderRadius: '50%',
      cursor: 'pointer',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      gridColumn: '1/2',
      gridRow: '1/2',
      zIndex: 3,
    },
    share_button: {
      opacity: `${shareButton}`,
      marginTop: 'auto',
      marginLeft: 'auto',
      marginRight: '50px',
      marginBottom: '12px',
    },
    options_button: {
      opacity: `${optionsButton}`,
      marginTop: 'auto',
      marginLeft: 'auto',
      marginRight: '10px',
      marginBottom: '12px',
    },
    icon: {
      cursor: 'pointer',
    },
  };

  return (
    <div
      style={{ ...props.style, ..._stylesPinHoverImage.hover_container }}
      onMouseEnter={() => props.setHover('grid')}
      onMouseOut={() => props.setHover('none')}
    >
      {/* Sombra del hover */}
      <div
        style={_stylesPinHoverImage.shadow}
        onMouseEnter={() => props.setHover('grid')}
      ></div>
      {/* Boton guardar del hover */}

      <button
        style={_stylesPinHoverImage.save_button}
        onMouseEnter={() => {
          props.setHover('grid');
          setSaveButton('#AD081B');
        }}
        onMouseOut={() => setSaveButton('#E60023')}
      >
        Guardar
      </button>

      {/* Boton de compartir */}
      <div
        style={{
          ..._stylesPinHoverImage.icon_button,
          ..._stylesPinHoverImage.share_button,
        }}
        onMouseEnter={() => {
          props.setHover('grid');
          setShareButton('1.0');
        }}
        onMouseOut={() => setShareButton('.8')}
      >
        <FontAwesomeIcon icon={faUpload} style={_stylesPinHoverImage.icon} />
      </div>

      {/* Boton de opciones */}
      <div
        style={{
          ..._stylesPinHoverImage.icon_button,
          ..._stylesPinHoverImage.options_button,
        }}
        onMouseEnter={() => {
          props.setHover('grid');
          setOptionsButton('1.0');
        }}
        onMouseOut={() => setOptionsButton('.8')}
      >
        <FontAwesomeIcon icon={faEllipsisH} style={_stylesPinHoverImage.icon} />
      </div>
    </div>
  );
};

export default PinHoverImage;
