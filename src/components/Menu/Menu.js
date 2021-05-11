import React from "react";
import { NavLink } from "react-router-dom";
import {HideMenu} from "../showMenu.js";
import './menu.css';

const Menu = () => (
  <div className="menu">
    <nav className="navbar">
      <input className="navbar_input" type="text" placeholder="Поиск"/>
      <NavLink to="/news" activeClassName="active-link" className="navbar_item navbar_news">Новости</NavLink>
      <NavLink to="/main" expect="true" activeClassName="active-link" className="navbar_item navbar_user">Личные сведения</NavLink>
      <a href="/" className="navbar_item navbar_information">Общие сведения</a>
      <a href="/" className="navbar_item navbar_plan">Учебный план</a>
      <a href="/" className="navbar_item navbar_grants">Стипендия</a>
      <a href="/" className="navbar_item navbar_rating">Рейтинг</a>
      <a href="/" className="navbar_item navbar_schedule">Расписание</a>
      <a href="/" className="navbar_item navbar_appraisals">Оценки</a>
      <a href="/" className="navbar_item navbar_questioning">Анкетирование</a>
      <a href="/" className="navbar_item navbar_works">Внеучебные работы</a>
      <a href="/" className="navbar_item navbar_publications">Мои публикации</a>
      <a href="/" className="navbar_item navbar_practices">Практики</a>
      <a href="/" className="navbar_item navbar_educational">Учебные работы</a>
      <a href="/" className="navbar_item navbar_faq">FAQ</a>
      <a href="/" className="navbar_item navbar_help">Помощь психолога</a>
      <a href="/" className="navbar_item navbar_subscription">Абонемент</a>
      <a href="/" className="navbar_item navbar_requirements">Требования</a>
      <a href="/" className="navbar_item navbar_ebs">ЭБС</a>
      <a href="/" className="navbar_item navbar_catalog">Электорнный каталог</a>
    </nav>
    <button onClick={HideMenu} className='btn'><div className="layout-bg"></div></button>
  </div>
);

export default Menu;