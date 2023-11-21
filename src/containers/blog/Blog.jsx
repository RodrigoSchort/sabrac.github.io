import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06, blog07, blog08, blog09, blog10, blog11 } from './imports';
import './blog.css';

const Blog = ({ englishLanguage }) => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">{englishLanguage ? "Our most recent activities" : "Nossas atividades mais recentes."}</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog01} date="20.11.2022" text={englishLanguage ? "4th edition of the recycling bazaar." : "4a edição do bazar reciclagem."} />
        <Article imgUrl={blog02} date="23.10.2022" text={englishLanguage ? "Charitable children's party." : "Festa das crianças beneficente."} />
        <Article imgUrl={blog03} date="11.12.2022" text={englishLanguage ? "Meeting about flooding and how to resolve it." : "Reunião sobre alagamentos e como resolver."} />
        <Article imgUrl={blog04} date="20.11.2022" text="Quisque iaculis nibh a convallis blandit. Phasellus sit amet velit in ex varius lacinia." />
        <Article imgUrl={blog05} date="Sep 25, 2021" text="Quisque iaculis nibh a convallis blandit. Phasellus sit amet velit in ex varius lacinia." />
        <Article imgUrl={blog06} date="Sep 26, 2021" text="Quisque iaculis nibh a convallis blandit. Phasellus sit amet velit in ex varius lacinia." />
        <Article imgUrl={blog07} date="Sep 26, 2021" text="Quisque iaculis nibh a convallis blandit. Phasellus sit amet velit in ex varius lacinia." />
        <Article imgUrl={blog08} date="Sep 26, 2021" text="Quisque iaculis nibh a convallis blandit. Phasellus sit amet velit in ex varius lacinia." />
        <Article imgUrl={blog09} date="Sep 26, 2021" text="Quisque iaculis nibh a convallis blandit. Phasellus sit amet velit in ex varius lacinia." />
        <Article imgUrl={blog10} date="Sep 26, 2021" text="Quisque iaculis nibh a convallis blandit. Phasellus sit amet velit in ex varius lacinia." />
        <Article imgUrl={blog11} date="Sep 26, 2021" text="Quisque iaculis nibh a convallis blandit. Phasellus sit amet velit in ex varius lacinia." />
      </div>
    </div>
  </div>
);

export default Blog;
