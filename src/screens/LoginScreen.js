import React, { useState } from 'react'
import './LoginScreen.css'
import SingupScreen from './SingupScreen';

function LoginScreen() {
    const [signIn, setSingIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__gradient"></div>
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <button onClick={() => setSingIn(true)} className="loginScreen__button">Sing In</button>
            </div>
            <div className="loginScreen__body">
                {signIn ? (<SingupScreen />) : (
                    <>
                    <h1>Unlimited films, TV Programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membershup</h3>
                    <div className="loginScreen__input">
                        <form>
                            <input type="email" placeholder="Email Adress"/>
                            <button onClick={() => setSingIn(true)} className="loginScreen__getStarted">GET STARTED</button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
        </div>
    )
}

export default LoginScreen
