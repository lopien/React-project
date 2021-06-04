import React from "react";
import { NavLink } from "react-router-dom";
import {HideMenu} from "./showMenu.js";
import './menu.css';

const Menu = () => (
  <div className="menu">
    <nav className="navbar">
      <input className="navbar_input" type="text" placeholder="Поиск"/>
      <NavLink to="/news" activeClassName="active-link" className="navbar_item">
        <svg width="21" height="16" className="navbar_news">
          <use xlinkHref="sprite.svg#news"></use>
        </svg>
        Новости</NavLink>
      <NavLink to="/personal_information" expect="true" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#user"></use>
        </svg>
        Личные сведения</NavLink>
      <NavLink to="/general_information" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#information"></use>
        </svg>
        Общие сведения</NavLink>
      <NavLink to="/plan" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#plan"></use>
        </svg>
        Учебный план</NavLink>
      <NavLink to="/grants" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#grants"></use>
        </svg>
        Стипендия</NavLink>
      <NavLink to="/rating" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#rating"></use>
        </svg>
        Рейтинг</NavLink>
      <NavLink to="/schedule" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#schedule"></use>
        </svg>
        Расписание</NavLink>
      <NavLink to="/appraisals" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#appraisals"></use>
        </svg>
        Оценки</NavLink>
      <NavLink to="/questioning" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#questioning"></use>
        </svg>
        Анкетирование</NavLink>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#works"></use>
        </svg>
        Внеучебные работы</a>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#publications"></use>
        </svg>
        Мои публикации</a>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#practices"></use>
        </svg>
        Практики</a>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#educational"></use>
        </svg>
        Учебные работы</a>
      <a href="/" className="navbar_item ">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#FAQ"></use>
        </svg>
        FAQ</a>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#help"></use>
        </svg>
        Помощь психолога</a>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#subscription"></use>
        </svg>
        Абонемент</a>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#requirements"></use>
        </svg>
        Требования</a>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#ebs"></use>
        </svg>
        ЭБС</a>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#catalog"></use>
        </svg>
        Электорнный каталог</a>
    </nav>
    <button onClick={HideMenu} className='btn'>
      <div className="layout-bg"></div>
    </button>
  </div>
);

export default Menu;