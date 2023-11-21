import React from 'react';
import gpt3Logo from '../../logo1.png';
import './footer.css';

const Footer = ({ englishLanguage }) => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          {englishLanguage
            ? 'Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved'
            : 'Crechterwoord K12 182 DK Alknjkcb, Todos os direitos reservados'}
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>{englishLanguage ? "Links" : "Links"}</h4>
        <p>{englishLanguage ? "About Us" : "Sobre Nós"}</p>
        <p>{englishLanguage ? "Social Media" : "Mídias Sociais"}</p>
        <p>{englishLanguage ? "Counters" : "Counters"}</p>
        <p>{englishLanguage ? "Contact" : "Contato"}</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>{englishLanguage ? "Company" : "Empresa"}</h4>
        <p>{englishLanguage ? "Terms & Conditions" : "Termos e Condições"}</p>
        <p>{englishLanguage ? "Privacy Policy" : "Política de Privacidade"}</p>
        <p>{englishLanguage ? "Contact" : "Contato"}</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>{englishLanguage ? "Get in touch" : "Entre em contato"}</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Sabrac. {englishLanguage ? "All rights reserved." : "Todos os direitos reservados."}</p>
      <p>{englishLanguage ? "Site created by Cyberdrick" : "Site criado por Cyberdrick"}</p>
    </div>
  </div>
);


export default Footer;
