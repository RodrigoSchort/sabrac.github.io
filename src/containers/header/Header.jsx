import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Sociedade de Amigos do Bairro Ressaca e Caputera</h1>
      <p>Os Bairros Ressaca e Caputera
          apresentam problemas
          estruturais em varios locais e
          pessoas em situação de
          vulnerabilidade social. Assim
          surge a SABRAC promovendo
          ações e empoderando os
          municipes a procurarem uma
          solução com suas próprias mãos.
        </p>

      <div className="gpt3__header-content__input">
        <button type="button">Nos apoe, faça uma doação</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
