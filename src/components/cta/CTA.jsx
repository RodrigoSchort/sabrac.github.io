import React from 'react';
import './cta.css';

const CTA = ({ englishLanguage }) => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>{englishLanguage ? "Want to make a difference? Click the button and donate to the organization:" : "Quer fazer a diferença? Clique no botão e doe para a organização :"}</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button">{englishLanguage ? "Make Donation" : "Fazer Doação"}</button>
    </div>
  </div>
);

export default CTA;
