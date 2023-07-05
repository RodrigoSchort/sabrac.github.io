import React from 'react';
import './donate.css';

const Donate = () => (
  <div className="cta">
    <div className="cta-content">
      <h3>Quer fazer a diferença? Clique no botão e doe para a organização :)</h3>
    </div>
    <div className="cta-btn">
      <a href="https://www.kickante.com.br/crowdfunding/doe-para-sabrac" target="_blank">
        <button type="button">Fazer Doação</button>
      </a>
    </div>
  </div>
);

export default Donate;
