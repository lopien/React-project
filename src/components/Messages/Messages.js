import React from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import {SendMessage, keySend} from './sendMessage.js'
import './messages.css';

const Messages = () => {
  return(
  <>
    <Menu/>
    <Header/>
    <div className="messages">
      <div className="messages-name">
        <input className="messages-search" type="text" placeholder="Поиск"/>
        <div className="message-select">
          <span className="message-group">Мат Анализ</span>
          <span className="message-group">История</span>
          <hr id="message-line"/>
          <span className="message-dialog">Павел Калганов</span>
        </div>
          
      </div>
      <div className="messages-message">
        <div className="message-input-line">

          <div className="messages-dialog">

            <div className="message-block">
              <div className="message-user-img">
                <img src="/img/user-photo.png" alt=""/>
              </div>
              <div className="messages-dialog-column">
                <div className="message-user-name">
                  <p>Хафизова Эльвира</p>
                  <small>12:33</small>
                </div>
                <div className="message-user-dialog">
                  fsdvgvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvfsdvgvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvfsdvgvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvfsdvgvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                </div>
              </div>
            </div>

            <div className="message-block">
              <div className="message-user-img">
                <img src="/img/user-photo.png" alt=""/>
              </div>
              <div className="messages-dialog-column">
                <div className="message-user-name">
                  <p>Хафизова Эльвира</p>
                  <small>12:33</small>
                </div>
                <div className="message-user-dialog">
                  fsdvgvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvfsdvgvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                </div>
              </div>
            </div>

          </div>

          <div className="message-sending">
            <input className="message-file" type="file" name="" id="message-file"/>
            <label htmlFor="message-file" className="message-file-button">
              <img src="/img/plus.svg" alt=""/>
            </label>
            <input onKeyUp={keySend} className="message-input" type="text"/>
            <button onClick={SendMessage} className="message-send">
              <img src="/img/sent.svg" alt=""/>
            </button>
          </div>
        </div>

      </div>
    </div>

  </>
  )
}

export default Messages;