import React from 'react';
import { Link } from "react-router-dom";
import './index.scss'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="banner__wrapper">
                        {/* <img src={bannerImg} alt="Test assignment for Frontend Developer position" /> */}
                        <div className="banner__content">
                            <h1 className="banner__title">
                                Test assignment for Frontend Developer position
                            </h1>
                            <p className="banner__text">
                                We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. 
                                Good luck! The photo has to scale in the banner area on the different screens
                            </p>
                            <Link to={'/signUp'} className="btn btn-primary">Sign up now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
