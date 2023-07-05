import React from 'react';
import gpt3Logo from '../../logo1.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>SABRAC</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href="https://www.canva.com/design/DAFAyQRRuZs/JpDC32IlHaeaC86cTKnvtg/view?utm_content=DAFAyQRRuZs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">Portfolio de Atividades</a></p>
        <p><a href="https://www.facebook.com/sabracaputera" target="_blank">Facebook</a></p>
        <p><a href="https://www.instagram.com/sabracaputera/" target="_blank">Instagram</a></p>
        <p><a href="https://wa.me/5511988784972" target="_blank">Contato</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSflR2XBFMgQwtpsqAJkKLLN5fSDdM89bap5vqLNSqeXLcOgKg/viewform" target="_blank">Vagas de Voluntariado</a></p>
        <p>sabracaputera@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Sabrac. Todos os direitos reservados.</p>
      <p> Site criado por Cyberdrick</p>
    </div>
  </div>
);

export default Footer;
