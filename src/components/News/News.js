import React from 'react';
import './news.css';
import Menu from '../Menu/Menu';
import {ShowMenu} from "../showMenu.js";

const News = () => {
  return(
    <>
      <Menu/>
      <div className="news">
        <button onClick={ShowMenu} className="btn navbar-btn" >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </button>

        <div className="news-block">
          <img className="news-img" src="img/1.jpg" alt=""/>
          <p className="news-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor blanditiis, voluptas aliquid, doloremque fuga saepe veritatis culpa eos ea deserunt libero. Culpa architecto vitae voluptas omnis quae at! Facilis!
          Aliquid ab molestiae eligendi similique sequi aliquam enim aut autem corporis id, est sit quae suscipit voluptates pariatur tenetur minus fuga. Inventore provident itaque ullam accusamus. Id neque inventore quo.</p>
        </div>
        <div className="news-block">
          <img className="news-img" src="img/1.jpg" alt=""/>
          <p className="news-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor blanditiis, voluptas aliquid, doloremque fuga saepe veritatis culpa eos ea deserunt libero. Culpa architecto vitae voluptas omnis quae at! Facilis!
          Aliquid ab molestiae eligendi similique sequi aliquam enim aut autem corporis id, est sit quae suscipit voluptates pariatur tenetur minus fuga. Inventore provident itaque ullam accusamus. Id neque inventore quo.</p>
        </div>
        <div className="news-block">
          <img className="news-img" src="img/1.jpg" alt=""/>
          <p className="news-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor blanditiis, voluptas aliquid, doloremque fuga saepe veritatis culpa eos ea deserunt libero. Culpa architecto vitae voluptas omnis quae at! Facilis!
          Aliquid ab molestiae eligendi similique sequi aliquam enim aut autem corporis id, est sit quae suscipit voluptates pariatur tenetur minus fuga. Inventore provident itaque ullam accusamus. Id neque inventore quo.</p>
        </div>
        <div className="news-block">
          <img className="news-img" src="img/1.jpg" alt=""/>
          <p className="news-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor blanditiis, voluptas aliquid, doloremque fuga saepe veritatis culpa eos ea deserunt libero. Culpa architecto vitae voluptas omnis quae at! Facilis!
          Aliquid ab molestiae eligendi similique sequi aliquam enim aut autem corporis id, est sit quae suscipit voluptates pariatur tenetur minus fuga. Inventore provident itaque ullam accusamus. Id neque inventore quo.</p>
        </div>
        <div className="news-block">
          <img className="news-img" src="img/1.jpg" alt=""/>
          <p className="news-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor blanditiis, voluptas aliquid, doloremque fuga saepe veritatis culpa eos ea deserunt libero. Culpa architecto vitae voluptas omnis quae at! Facilis!
          Aliquid ab molestiae eligendi similique sequi aliquam enim aut autem corporis id, est sit quae suscipit voluptates pariatur tenetur minus fuga. Inventore provident itaque ullam accusamus. Id neque inventore quo.</p>
        </div>
        <div className="news-block">
          <img className="news-img" src="img/1.jpg" alt=""/>
          <p className="news-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor blanditiis, voluptas aliquid, doloremque fuga saepe veritatis culpa eos ea deserunt libero. Culpa architecto vitae voluptas omnis quae at! Facilis!
          Aliquid ab molestiae eligendi similique sequi aliquam enim aut autem corporis id, est sit quae suscipit voluptates pariatur tenetur minus fuga. Inventore provident itaque ullam accusamus. Id neque inventore quo.</p>
        </div>
        <div className="news-block">
          <img className="news-img" src="img/1.jpg" alt=""/>
          <p className="news-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor blanditiis, voluptas aliquid, doloremque fuga saepe veritatis culpa eos ea deserunt libero. Culpa architecto vitae voluptas omnis quae at! Facilis!
          Aliquid ab molestiae eligendi similique sequi aliquam enim aut autem corporis id, est sit quae suscipit voluptates pariatur tenetur minus fuga. Inventore provident itaque ullam accusamus. Id neque inventore quo.</p>
        </div>
        <div className="news-block">
          <img className="news-img" src="img/1.jpg" alt=""/>
          <p className="news-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor blanditiis, voluptas aliquid, doloremque fuga saepe veritatis culpa eos ea deserunt libero. Culpa architecto vitae voluptas omnis quae at! Facilis!
          Aliquid ab molestiae eligendi similique sequi aliquam enim aut autem corporis id, est sit quae suscipit voluptates pariatur tenetur minus fuga. Inventore provident itaque ullam accusamus. Id neque inventore quo.</p>
        </div>
      </div>
    </>
    );
  };

export default News;