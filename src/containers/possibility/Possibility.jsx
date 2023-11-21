import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = ({ englishLanguage }) => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>{englishLanguage ? "Make the difference" : "Faça a diferença"}</h4>
      <h1 className="gradient__text">{englishLanguage ? "Change the future of your neighborhood" : "Mudar o futuro do seu bairro"} <br /> {englishLanguage ? "is preparing the future for new generations." : "é preparar o futuro para novas gerações."}</h1>
      <p>{englishLanguage ? "It is with the support of people like you that we can continue our work impacting lives. Help us to continue." : "É com o apoio de pessoas como você que conseguimos continuar nosso trabalho impactando vidas. Nos ajude a continuar."}</p>
    </div>
  </div>
);


export default Possibility;
