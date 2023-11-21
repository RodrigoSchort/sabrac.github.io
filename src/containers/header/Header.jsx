import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = ({ englishLanguage }) => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">{englishLanguage ? "Society of Friends of Neighborhood Ressaca and Caputera" : "Sociedade de Amigos do Bairro Ressaca e Caputera"}</h1>
      <p>{englishLanguage ? "The Ressaca and Caputera Neighborhoods present problems structures in various locations and people in situations of social vulnerability. Like this SABRAC appears promoting actions and empowering municipalities to look for a solution with your own hands." : "Os Bairros Ressaca e Caputera apresentam problemas estruturais em varios locais e pessoas em situação de vulnerabilidade social. Assim surge a SABRAC promovendo ações e empoderando os municípios a procurarem uma solução com suas próprias mãos."}
      </p>

      <div className="gpt3__header-content__input">
        <button type="button">{englishLanguage ? "Support us, make a donation" : "Nos apoie, faça uma doação"}</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
