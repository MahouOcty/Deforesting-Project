import React from 'react';
import HeaderHome from '../Header-Components/HeaderHome';
import HeaderOptions from '../Header-Components/HeaderOptions';
import HeaderSearch from '../Header-Components/HeaderSearch';

const HeaderLayout = () => {
    const _HeaderLayouStyles = {
        HeaderLayout: {
            height: "65px",
            width: "100%",
            top: "0px",
            position: "fixed",
            zIndex: 1,
            backgroundColor: "white",
            display: "flex",
            justifyContent: "flex-end"
        }
    }
    return (
        <div style={_HeaderLayouStyles.HeaderLayout}>
            <HeaderHome />
            <HeaderSearch />
            <HeaderOptions/>
        </div>
    );
};

export default HeaderLayout;