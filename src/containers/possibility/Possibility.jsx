import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Faça a diferença</h4>
      <h1 className="gradient__text">Mudar o futuro do seu bairro <br /> é preparar o futuro para novas gerações.</h1>
      <p>É com o apoio de pessoas como você que conseguimos continuar nosso trabalho impactando vidas. Nos ajude a continuar.</p>
    </div>
  </div>
);

export default Possibility;
