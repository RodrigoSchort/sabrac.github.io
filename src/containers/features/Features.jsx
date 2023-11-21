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

const featuresDataEnglish = [
  {
    title: 'Local',
    text: 'Our headquarters is 100 square meters. It is currently undergoing renovation, but we already use it for classes, parties, meetings, and other activities.',
  },
  {
    title: 'Recycling Bazaar',
    text: 'An event that is already in its 4th edition, where the population can exchange recyclable materials for items from the bazaar, teaching about recycling and stimulating the local economy.',
  },
  {
    title: 'Free Courses',
    text: 'We already offered English classes and now we also have free classes in Spanish, guitar, capoeira, and adult literacy for the entire population.',
  },
  {
    title: 'Combatting Hunger',
    text: 'We have received many requests from people in the region who are experiencing food insecurity. We have already distributed more than 100 food baskets in collaboration with partners in the #ZeroHunger campaign.',
  },
];


const Features = ({ englishLanguage }) => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">{englishLanguage ? "Be part of our project and contribute to the history of the neighborhood" : "Faça parte do nosso projeto e contribua com a história do Bairro"} </h1>
      <div className='gpt3__cta-btn1'>
        <button>{englishLanguage ? "Click here and become a Volunteer!" : "Clique aqui e se torne um Voluntário!"}</button>
      </div>

    </div>
    <div className="gpt3__features-container">
      {!englishLanguage ? featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      )) : featuresDataEnglish.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
