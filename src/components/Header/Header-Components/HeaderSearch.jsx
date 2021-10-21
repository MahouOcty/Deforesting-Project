import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const HeaderSearch = () => {
    
    const [searchBg, setSearchBg] =useState("#EFEFEF");

    const _HeaderSearchStyles = {
        searchContainer:{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            flex: 1
        },
        searchBar: {
            display: 'flex',
            width: '100%',
            height: '45px',
            borderRadius: '23px',
            borderWidth: 0,
            fontSize: '16px',
            paddingLeft: '43px',
            color: '#555753',
            backgroundColor: `${searchBg}`
        },
        icon: {
            width: '16px',
            height: '16px',
            position: 'absolute',
            paddingLeft: '18px',
            color: "#767676"
        }
    }
    return (
        <div style={_HeaderSearchStyles.searchContainer}>
            <FontAwesomeIcon icon={faSearch} style={_HeaderSearchStyles.icon} />
            <input 
            type="text" 
            style={_HeaderSearchStyles.searchBar}
            placeholder="Buscar..."
            onMouseEnter = {() => {
                setSearchBg("#DDDDDD")
            }}
            onMouseLeave = {() => {
                setSearchBg("#EFEFEF")
            }} />
        </div>
    );
};

export default HeaderSearch;