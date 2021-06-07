import React from "react";
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';
import "./index.css";

const Index = () => {
  let history = useHistory();

  const Form = () => {
    history.push("/main");
  }

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequestCloseFunc = () => {
    setOpen(false);
  };
  
  return (
    <>
      <header>
        <div className="main-bg">
          <img className="main-logo" src='img/logo.png' alt="Logo"/>
          <button onClick={handleOpen} className="btn main-registration">Регистрация</button>
          <button onClick={handleOpen} className="btn main-login">Войти</button>
          <div className="main-title">
            <h1 className="main-title1">Центр</h1>
            <h1 className="main-title2">Информационного</h1>
            <h1 className="main-title3">Обеспечения</h1>
          </div>
        </div>
        <Modal 
          isOpen={open}
          onClose={handleClose}
          className={{
            base: 'modal-content', 
            afterOpen: 'modal-content',
            beforeClose: 'modal-content'
          }}
          overlayClassName={{
            base: 'modal-bg', 
            afterOpen: 'modal-bg',
            beforeClose: 'modal-bg'
          }}
          onRequestClose = {handleRequestCloseFunc}
          ariaHideApp={false}
        >
            <h3 className="modal-title">Здравствуйте!<br/>Чтобы войти в систему введите логин и пароль</h3>
            <form className="modal-form" onSubmit={Form}>
              <input className="modal-input" type="text" placeholder="Логин" required/>
              <input className="modal-input" type="password" placeholder="Пароль" required/>
              <input type="submit" className="modal-btn" value='Вход'/>
            </form>
        </Modal>
      </header>
    </>
  );
};


export default Index;