import React from "react";
import { Link } from "react-router-dom";
import { ShowMenu } from "../Menu/showMenu";
import Modal from 'react-modal';

import "./header.css";

const Header = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleRequestCloseFunc = () => {
    setOpen(false);
  };
  return(
  <>
    <div className="header-block" >
      <button onClick={ShowMenu} className="navbar-btn" >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </button>
      <div className="student-info">
        <Link to='/main' className="main-info-link">
          <div className="main-student">
              <img src="img/user-photo.png" alt=""/>
            <div className="main-student-info">
              <p>Хафизова Эльвира</p>
              <p>Таб. № 1139693</p>
            </div>
          </div>
        </Link>

        <div className="main-week">
          <p className="main-week-number">12 Неделя</p>
          <i>Числитель</i>
        </div>
        
        <div className="main-setting">
          <Link to="/messages">
            <img className="main-settings" src="img/message.svg" alt=""/>
          </Link>
          <button onClick={handleOpen} className="btn">
            <img className="main-settings" src="img/setting.svg" alt=""/>
          </button>
          <Link to="/"><img className="main-settings" src="img/out.svg" alt=""/></Link>
        </div>
      </div>
    </div>

    <Modal 
          isOpen={open}
          className={{
            base: 'modal-setting-content', 
            afterOpen: 'modal-setting-content',
            beforeClose: 'modal-setting-content'
          }}
          overlayClassName={{
            base: 'modal-bg', 
            afterOpen: 'modal-bg1',
            beforeClose: 'modal-bg1'
          }}
          onRequestClose = {handleRequestCloseFunc}
          ariaHideApp={false}
        >
          <h3 className="modal-setting-title">Настройки</h3>
        </Modal>
  </>
  )
};

export default Header;