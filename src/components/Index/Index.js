import React from "react";
import logo from '../../logo.png';
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom"; 
import OpenModal from './script.js';
import "./index.css";

// const Form = () => {
//   return <Link to="/about"></Link>
// }

const Index = () => {
  return (
    <>
      <header>
        <div className="main-bg">
          <img className="main-logo" src={logo} alt="Logo"/>
          <button onClick={OpenModal} className="btn main-registration">Регистрация</button>
          <button onClick={OpenModal} className="btn main-login">Войти</button>
          <div className="main-title">
            <h1 className="main-title1">Центр</h1>
            <h1 className="main-title2">Информационного</h1>
            <h1 className="main-title3">Обеспечения</h1>
          </div>
        </div>
        <div className="modal">
          <div className="modal-bg"></div>
          <div className="modal-content">
            <h3 className="modal-title">Здравствуйте!<br/>Чтобы войти в систему введите логин и пароль</h3>
            <form className="modal-form">
              <input className="modal-input" type="text" placeholder="Логин" required/>
              <input className="modal-input" type="password" placeholder="Пароль" required/>
              <Link to='/main'><button type="submit" className="modal-btn" >Вход</button></Link>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};


export default Index;