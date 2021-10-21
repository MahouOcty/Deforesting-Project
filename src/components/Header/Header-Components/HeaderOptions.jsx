import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

//componente derecho del Layout, contiene todas las opciones personales del usuario
const HeaderOptions = () => {
    
    const [notificationsBg, setNotificationsBg] = useState("white");
    const [messagesBg, setMessagesBg] = useState("white");
    const [userBg, setUserBg] = useState("white");
    const [adminBg, setAdminBg] = useState("white");

    const _HeaderOptionStyles = {
        options: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "20px"
        },
        button: {
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            color: "#767676",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "25px",
            margin: "1px",
            border: "none"
        },
        button_notifications: {
            backgroundColor: `${notificationsBg}`
        },
        button_messages: {
            backgroundColor: `${messagesBg}`
        },
        button_user: {
            backgroundColor: `${userBg}`
        },
        button_admin: {
            height: "25px",
            width: "25px",
            borderRadius: "30px",
            color: "#767676",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "25px",
            backgroundColor: `${adminBg}`,
            border: "none"
        },
        icons: {
            cursor: "pointer"
        },
        icon_admin: {
            cursor: "pointer",
            height: "15px",
            width: "15px"
        },
        user_image: {
            height: "25px",
            width: "25px",
            cursor: "pointer",
            borderRadius: "50%"
        }
    }
    return (
        <div style={_HeaderOptionStyles.options}>
            <button 
            style={{..._HeaderOptionStyles.button, ..._HeaderOptionStyles.button_notifications}}
            onMouseEnter={() => {
                setNotificationsBg("#f0f0f0");
            }}
            onMouseLeave={() => {
                setNotificationsBg("white");
            }}>
                <FontAwesomeIcon icon={faBell} style={_HeaderOptionStyles.icons} />
            </button>
            <button 
            style={{..._HeaderOptionStyles.button, ..._HeaderOptionStyles.button_messages}}
            onMouseEnter={() => {
                setMessagesBg("#f0f0f0");
            }}
            onMouseLeave={() => {
                setMessagesBg("white");
            }}>
                <FontAwesomeIcon icon={faCommentDots} style={_HeaderOptionStyles.icons} />
            </button>
            <button 
            style={{..._HeaderOptionStyles.button, ..._HeaderOptionStyles.button_user}}
            onMouseEnter={() => {
                setUserBg("#f0f0f0");
            }}
            onMouseLeave={() => {
                setUserBg("white");
            }}>
                <img 
                src="https://picsum.photos//50/50"
                alt="usr"
                style={_HeaderOptionStyles.user_image} />
            </button>
            <button 
            style={{..._HeaderOptionStyles.button_admin}}
            onMouseEnter={() => {
                setAdminBg("#f0f0f0");
            }}
            onMouseLeave={() => {
                setAdminBg("white");
            }}>
                <FontAwesomeIcon icon={faChevronDown} style={_HeaderOptionStyles.icon_admin} />
            </button>
        </div>
    );
};

export default HeaderOptions;