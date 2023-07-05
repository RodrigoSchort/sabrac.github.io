import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Local',
    text: 'Nossa sede tem 100m. Está em processo de reforma, porém ja utilizamos para aulas, festas, reuniões e outras atividades.',
  },
  {
    title: 'Bazar Reciclagem',
    text: 'Evento que já esta em sua 4a edição onde a população pode trocar material reciclavel por itens do bazar, ensinando sobre reciclagem e estimulando a economia do local.',
  },
  {
    title: 'Cursos Gratuitos',
    text: 'Já oferecíamos aulas de inglês a agora contamos com aulas de espanhol, violão, capoeira e alfabetização de adultos totalmente gratuito para toda população.',
  },
  {
    title: 'Combate a Fome',
    text: 'Recebemos muitos pedidos de pessoas na região que estão passando por insegurança alimentar. Já distribuimos mais de 100 cestas basicas em conjunto com parceiros na campanha #SabracFomeZero.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Faça parte do nosso projeto e contribua com a história do Bairro</h1>
        <div className='gpt3__cta-btn1'>
          <a href="https://www.instagram.com/rafakoester/?hl=pt" target="_blank">
            <button>Clique aqui e se torne um Voluntário!</button>
          </a>
        </div>
      
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
