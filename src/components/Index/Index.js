import React from "react";
import { useHistory } from "react-router-dom";
import OpenModal from './script.js';
import "./index.css";


const Index = () => {
  let history = useHistory();

  const Form = () => {
    history.push("/main");
  }

  return (
    <>
      <header>
        <div className="main-bg">
          <img className="main-logo" src='img/logo.png' alt="Logo"/>
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
            <form className="modal-form" onSubmit={Form}>
              <input className="modal-input" type="text" placeholder="Логин" required/>
              <input className="modal-input" type="password" placeholder="Пароль" required/>
              <input type="submit" className="modal-btn" value='Вход'/>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};


export default Index;