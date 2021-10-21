import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const HeaderHome = () => {
    
    const [logoBg, setLogoBg] = useState("white");
    const [todayBg, setTodayBg] =useState("white");

    const _HeaderHomeStyles = {
        home: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "20px"
        },
        button_logo: {
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            color: "#E60023",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "25px",
            margin: "1px",
            backgroundColor: `${logoBg}`,
            border: "none"
        },
        button_type: {
            height: "50px",
            padding: "0 20px",
            borderRadius: "50px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            margin: "1px",
            border: "none",
            fontSize: "17px"
        },
        button_home: {
            backgroundColor: "#111111",
            color: "white"
        },
        button_today: {
            color: "black",
            backgroundColor: `${todayBg}`
        }
    }
    return (
        <div style={_HeaderHomeStyles.home}>
            <button
            style={_HeaderHomeStyles.button_logo}
            onMouseEnter={() => {
                setLogoBg("#f0f0f0")
            }}
            onMouseLeave={() => {
                setLogoBg("white")
            }}>
                <FontAwesomeIcon icon={faPinterest} />
            </button>
            <button style = {{..._HeaderHomeStyles.button_type, ..._HeaderHomeStyles.button_home}}>
                Inicio
            </button>
            <button 
            style = {{..._HeaderHomeStyles.button_type, ..._HeaderHomeStyles.button_today}}
            onMouseEnter={() => {
                setTodayBg("#f0f0f0");
            }}
            onMouseLeave={() => {
                setTodayBg("white");
            }}>
                Hoy
            </button>
        </div>
    );
};

export default HeaderHome;