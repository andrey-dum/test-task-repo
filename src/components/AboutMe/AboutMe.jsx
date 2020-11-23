import React from 'react';
import { Link } from "react-router-dom";
import manPng from '../../assets/img/man.png'
import manPng2x from '../../assets/img/man@2x.png'
import manWebp from '../../assets/img/man.webp'

import './index.scss'

const AboutMe = () => {
    return (
        <div id="aboutMe" className="about section">
            <div className="container">
                <h1 className="section__title text-center">Let's get acquainted</h1>

                <div className="about__content ">
                   <div className="about__img">
                   <picture>
                        <source srcSet={`${manWebp} 1x`} type="image/webp" />
                        <source srcSet={manPng} type="image/jpeg" /> 
                        <img src={manPng} srcSet={manPng2x + ' 2x'} alt=""/>
                    </picture>
                   </div>
                    <div className="about__text" >
                        <h2>I am cool frontend developer</h2>
                        <p>We will evaluate how clean your approach to writing CSS and Javascript code is. 
                            You can use any CSS and Javascript 3rd party libraries without any restriction.
                        </p>
                        <p>
                            If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. 
                            If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3. 
                        </p>
                        <div className="btn-wrapper">
                            <Link to={'/signUp'} className="btn btn-flat">Sign up now</Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
