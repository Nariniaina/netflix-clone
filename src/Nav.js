import React, { useState, useEffect } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    const history = useNavigate();

    useEffect(() => {
        // Listen to the scroll event
        window.addEventListener("scroll", transitionNavBar);
        // This line is a cleaner <=> its a good practise but You don't need it
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        // This line means : only add nav__black class is show variable is true
        <div className={`nav  ${show && "nav nav__black"}`}>
            <div className="nav__contents">
                <img onClick={() => history("/")} className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <img 
                onClick={() => history("/profile")} 
                className="nav__avatar" 
                src="https://www.shareicon.net/data/2016/07/05/791218_man_512x512.png" alt=""/>
            </div>
        </div>
    )
}

export default Nav
