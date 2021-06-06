import React from 'react';
import './news.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import data from './new.json';

const News = () => {
  const template = Object.keys(data).map((item) => 
      <div className="news" key={data[item].id}>
      <img className="news-img" src={data[item].photo} alt=""/>
      <p className="news-text">{data[item].id} {data[item].text}</p>
    </div>
    );

  return(
    <>
      <Menu/>
      <Header/>
      {template}
    </>
    );
  };

export default News;