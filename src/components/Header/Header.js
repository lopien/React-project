import React from "react";
import { Link } from "react-router-dom";
import { ShowMenu } from "../Menu/showMenu";
import { ModalMessage, ModalSettings } from "./modal";

import "./header.css";

const Header = () => {
  return(
  <>
    <div className="header-block" >
      <button onClick={ShowMenu} className="navbar-btn" >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </button>
      <div className="main-info">
        <div className="main-student">
          <img src="img/user-photo.png" alt=""/>
          <div className="main-student-name">
            <p>Хафизова Эльвира</p>
            <p>Таб. № 1139693</p>
          </div>
        </div>
        
        <div className="main-week">
          <p className="main-week-number">12 Неделя</p>
          <i>Числитель</i>
        </div>
        
        <div className="main-setting">
          <button onClick={ModalMessage} className="btn"><img className="main-settings" src="img/message.svg" alt=""/></button>
          <button onClick={ModalSettings} className="btn"><img className="main-settings" src="img/setting.svg" alt=""/></button>
          <Link to="/"><img className="main-settings" src="img/out.svg" alt=""/></Link>
        </div>
      </div>
    </div>

    <div className="modal-message">
      <div className="modal-bg"></div>
      <div className="modal-message-content">
        <h3 className="modal-message-title">Сообщения</h3>
      </div>
    </div>
    <div className="modal-setting">
      <div className="modal-bg1"></div>
      <div className="modal-setting-content">
        <h3 className="modal-setting-title">Настройки</h3>
      </div>
    </div>
  </>
  )
};

export default Header;