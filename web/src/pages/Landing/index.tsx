import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css'; 

//images
import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

//icons
import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    <img src={logo} alt="logo" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landing} alt="Proffy" className="hero-image" />

                <div className="buttons-container">

                    <Link to="/study" className="study">
                        <img src={study} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClasses} alt="Dar aulas" />
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões 
                    <img src={purpleHeart} alt="purple heart" />
                </span>

            </div>
        </div>
    )
}

export default Landing;