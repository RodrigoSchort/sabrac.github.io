import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06, blog07, blog08, blog09, blog10, blog11 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Nossas atividades mais recentes.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog01} date="20.11.2022" text="4a edição do bazar reciclagem." />
        <Article imgUrl={blog02} date="23.10.2022" text="Festa das crianças beneficente." />
        <Article imgUrl={blog03} date="11.12.2022" text="Reunião sobre alagamentos e como resolver." />
      </div>
    </div>
  </div>
);

export default Blog;
