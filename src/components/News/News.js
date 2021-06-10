import React from 'react';
import './news.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import data from './news.json';

const News = () => {
  return(
    <>
      <Menu/>
      <Header/>
      {
        Object.keys(data).map((item) =>
        <div className="news" key={data[item].id}>
          <img className="news-img" src={data[item].photo} alt=""/>
          <p className="news-text">{data[item].text}</p>
        </div>
      )};
    </>
    );
  };

export default News;