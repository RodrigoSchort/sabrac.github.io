import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="" text="A associação ficou desativada desde 2014. Mas no ano passado um grupo de moradores se uniu para reativá-la após ficarem revoltados com os diversos
        problemas do bairro, de buracos na estrada que ja ocasionaram acidentes a falta de vagas, péssima estrutura da creche e falta de medicamentos na UBS local." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">SOMOS UMA ORGANIZAÇÃO QUE BUSCA REUNIR MORADORES PELA MELHORIA DO BAIRRO</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Onde atuamos" text="Localizado na fronteira entre as três cidades de Embu das Artes, Itapecerica da Serra e Cotia na Grande São Paulo,
        a região tem carência de politicas publicas dos três municipios para lidar com seus problemas, sendo muitas vezes ignorado pelos três." />

      <Feature title="História" text="A SABRA foi foi criada em 2002 por um grupo de moradores liderados por José Marques, e por 10 anos atuou no bairro com diversas iniciativas como
        distribuições de cestas basicas a familias carentes, reuniões cobrando o poder público por melhorias no bairro e mais..." />

      <Feature title="Retorno" text="A associação ficou desativada desde 2014. Mas no ano passado um grupo de moradores se uniu para reativá-la após ficarem revoltados com os diversos
        problemas do bairro, de buracos na estrada que ja ocasionaram acidentes a falta de vagas, péssima estrutura da creche e falta de medicamentos na UBS local." />
    </div>
  </div>
);

export default About;
