import React from "react";
import { NavLink } from "react-router-dom";
import { HideMenu } from "./showMenu.js";
import Search from "./search.js";
import './menu.css';

const Menu = () => (
  <div className="menu">
    <ul className="navbar">
      <input className="navbar_input" onKeyUp={Search} type="text" placeholder="Поиск"/>
      <li>
      <NavLink to="/news" activeClassName="active-link" className="navbar_item">
        <svg width="21" height="16" className="navbar_news">
          <use xlinkHref="sprite.svg#news"></use>
        </svg>
        Новости
      </NavLink>
      </li>
      <li>
      <NavLink to="/personal_information" expect="true" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#user"></use>
        </svg>
        Личные сведения
      </NavLink>
      </li>
      <li>
      <NavLink to="/general_information" expect="true" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#information"></use>
        </svg>
        Общие сведения
      </NavLink>
      </li>
      <li>
      <NavLink to="/plan" expect="true" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#plan"></use>
        </svg>
        Учебный план
      </NavLink>
      </li>
      <li>
      <NavLink to="/grants" expect="true" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#grants"></use>
        </svg>
        Стипендия
      </NavLink>
      </li>
      <li>
      <NavLink to="/rating" expect="true" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#rating"></use>
        </svg>
        Рейтинг
      </NavLink>
      </li>
      <li>
      <NavLink to="/schedule" expect="true" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#schedule"></use>
        </svg>
        Расписание
      </NavLink>
      </li>
      <li>
      <NavLink to="/appraisals" expect="true" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#appraisals"></use>
        </svg>
        Оценки
      </NavLink>
      </li>
      <li>
      <NavLink to="/questioning" expect="true" activeClassName="active-link" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#questioning"></use>
        </svg>
        Анкетирование
      </NavLink>
      </li>
      <li>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#works"></use>
        </svg>
        Внеучебные работы</a>
      </li>
      <li>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#publications"></use>
        </svg>
        Мои публикации</a>
      </li>
      <li>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#practices"></use>
        </svg>
        Практики</a>
      </li>
      <li>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#educational"></use>
        </svg>
        Учебные работы</a>
      </li>
      <li>
      <a href="/" className="navbar_item ">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#FAQ"></use>
        </svg>
        FAQ</a>
      </li>
      <li>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#help"></use>
        </svg>
        Помощь психолога</a>
      </li>
      <li>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#subscription"></use>
        </svg>
        Абонемент</a>
      </li>
      <li>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#requirements"></use>
        </svg>
        Требования</a>
      </li>
      <li>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#ebs"></use>
        </svg>
        ЭБС</a>
      </li>
      <li>
      <a href="/" className="navbar_item">
        <svg width="16" height="17" className="navbar_link">
          <use xlinkHref="sprite.svg#catalog"></use>
        </svg>
        Электорнный каталог</a>
      </li>
    </ul>
    <button onClick={HideMenu} className='btn'>
      <div className="layout-bg"></div>
    </button>
  </div>
);

export default Menu;