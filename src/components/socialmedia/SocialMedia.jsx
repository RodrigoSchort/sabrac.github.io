import React from "react";
import './social-media.css';
import logoInstagram from '../../icons/icons8-instagram.svg';
import logoLinkedin from '../../icons/icons8-linkedin.svg';
import logoFacebook from '../../icons/icons8-facebook.svg';
import usaFlag from '../../icons/icons8-usa-48.png';
import brazilFlag from '../../icons/icons8-brazil-48.png';

const SocialMedia = ({ setEnglishLanguage }) => {
    return (
        <div className="main-container">
            <div className="languages_container">
                <img src={brazilFlag} alt="portuguese" onClick={() => setEnglishLanguage(false)} />
                <img src={usaFlag} alt="english" onClick={() => setEnglishLanguage(true)} />
            </div>
            <div className="social-media_container">
                <a href='https://www.instagram.com/sabracaputera/' target='_blank' rel="noreferrer"><img src={logoInstagram} alt='instagramLogo' /></a>
                <a href='https://www.linkedin.com/company/sabrac/about/' target='_blank' rel="noreferrer"><img src={logoLinkedin} alt='linkedinLogo' /></a>
                <a href='https://www.facebook.com/sabracaputera' target='_blank' rel="noreferrer"><img src={logoFacebook} alt='facebookLogo' /></a>
            </div>
        </div>
    );
};

export default SocialMedia;