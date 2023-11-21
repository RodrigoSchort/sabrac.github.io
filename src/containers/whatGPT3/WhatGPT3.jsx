import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = ({ englishLanguage }) => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title=""
        text={
          englishLanguage
            ? "The association has been inactive since 2014. But last year, a group of residents came together to reactivate it after being outraged by various neighborhood problems, from road potholes that have caused accidents to a lack of parking spaces, poor daycare structure, and a shortage of medications at the local health center."
            : "A associação ficou desativada desde 2014. Mas no ano passado um grupo de moradores se uniu para reativá-la após ficarem revoltados com os diversos problemas do bairro, de buracos na estrada que já ocasionaram acidentes à falta de vagas, péssima estrutura da creche e falta de medicamentos na UBS local."
        }
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        {englishLanguage
          ? "WE ARE AN ORGANIZATION THAT SEEKS TO BRING TOGETHER RESIDENTS FOR THE IMPROVEMENT OF THE NEIGHBORHOOD"
          : "SOMOS UMA ORGANIZAÇÃO QUE BUSCA REUNIR MORADORES PELA MELHORIA DO BAIRRO"}
      </h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title={englishLanguage ? "Where We Operate" : "Onde atuamos"}
        text={
          englishLanguage
            ? "Located on the border between the three cities of Embu das Artes, Itapecerica da Serra, and Cotia in Greater São Paulo, the region lacks public policies from the three municipalities to address its problems, often being ignored by all three."
            : "Localizado na fronteira entre as três cidades de Embu das Artes, Itapecerica da Serra e Cotia na Grande São Paulo, a região tem carência de políticas públicas dos três municípios para lidar com seus problemas, sendo muitas vezes ignorado pelos três."
        }
      />

      <Feature
        title={englishLanguage ? "History" : "História"}
        text={
          englishLanguage
            ? "SABRA was created in 2002 by a group of residents led by José Marques and for 10 years operated in the neighborhood with various initiatives such as distributing food baskets to needy families, holding meetings demanding public authorities for improvements in the neighborhood, and more."
            : "A SABRA foi criada em 2002 por um grupo de moradores liderados por José Marques, e por 10 anos atuou no bairro com diversas iniciativas como distribuições de cestas básicas a famílias carentes, reuniões cobrando o poder público por melhorias no bairro e mais..."
        }
      />

      <Feature
        title={englishLanguage ? "Return" : "Retorno"}
        text={
          englishLanguage
            ? "The association has been inactive since 2014. But last year, a group of residents came together to reactivate it after being outraged by various neighborhood problems, from road potholes that have caused accidents to a lack of parking spaces, poor daycare structure, and a shortage of medications at the local health center."
            : "A associação ficou desativada desde 2014. Mas no ano passado um grupo de moradores se uniu para reativá-la após ficarem revoltados com os diversos problemas do bairro, de buracos na estrada que já ocasionaram acidentes à falta de vagas, péssima estrutura da creche e falta de medicamentos na UBS local."
        }
      />
    </div>
  </div>
);

export default WhatGPT3;
