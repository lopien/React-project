import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { AddTask, DeleteTask, ShowTask, HideTask } from './task';
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import "./main.css";

const data = {
  labels: [
    "Отлично",
    "Хорошо",
    "Удовлетворительно",
  ],
  datasets: [
  {
    data: [1, 2, 1],
    backgroundColor: [
        "red",
        "blue",
        "yellow",
    ],
    borderWidth: 0
  }]
}

const options = {
  plugins: {
    legend: {
      display: false,
    }
  },  
  animation: {
    animateRotate: false,
    animateScale: true
  }
}

const Main = () => {
  return(
  <>
    <Menu/>
    <Header/>
    <div className="main-block" >
      <div className="main-block-row">
        <div className="main-tasks">
          <div className="main-tast-info">
            <h3 className="main-task-title">Задачи</h3>
            <button className='btn' onClick={ShowTask}><img className="main-task-add" src="img/plus.svg" alt=""/></button>
            <button className='btn' onClick={HideTask}><img className="main-task-del" src="img/delete.svg" alt=""/></button>
          </div>
          <div className="task-add">
            <div className="task-add-title">
              <input className="task-date-input" type="text" placeholder="Дата"/>
            </div>
            <div className="task-text">
              <textarea className="task-text-input" name="" id="" rows="5"></textarea>
            </div>
            <div className="task-accept">
              <button onClick={AddTask} className="task-accept-btn">Добавить</button>
            </div>
          </div>
          <div className="task">
            <div className="task-title">
              <div></div>
              <span className="task-date">20 Апреля</span>
              <button onClick={DeleteTask} className="btn"><img className="main-task-img" src="img/remove.svg" alt=""/></button>
            </div>
            <div className="task-text">
              <p>НАПИСАТЬ ДИПОЛМ!!!!!!!</p>
            </div>
          </div>
          <div className="task">
            <div className="task-title">
              <div></div>
              <span className="task-date">7 Апреля</span>
              <button onClick={DeleteTask} className="btn"><img className="main-task-img" src="img/remove.svg" alt=""/></button>
            </div>
            <div className="task-text">
              <p>ПИСАТЬ ДИПОЛМ!!!!!!!</p>
            </div>
          </div>
          <div className="task">
            <div className="task-title">
              <div></div>
              <span className="task-date">8 Апреля</span>
              <button onClick={DeleteTask} className="btn"><img className="main-task-img" src="img/remove.svg" alt=""/></button>
            </div>
            <div className="task-text">
              <p>ПРОДОЛЖИТЬ ЕЩЕ ПИСАТЬ ПИСАТЬ ПИСАТЬ ПИСАТЬ ПИСАТЬ ПИСАТЬ ПИСАТЬ ПИСАТЬ ДИПОЛМ!!!!!!!</p>
            </div>
          </div>
        </div>
        <div className="main-progress">
          <div className="main-progress-info">
            <div></div>
            <h3 className="main-progress-title">Успеваемость</h3>
            <i>За все время</i>
          </div>
          <div className="main-progress-cirle">
            <div id="main-progress-diagram">
              <Doughnut  data={data} options={options} />
            </div>
          </div>
          <div className="main-progress-rating">
            <div className="main-progress-1">
              <div className="main-progress-red"></div>
              <span>Отлично</span>
            </div>
            <div className="main-progress-2">
              <div className="main-progress-blue"></div>
              <span>Хорошо</span> 
            </div>
            <div className="main-progress-3">
              <div className="main-progress-yellow"></div>
              <span>Удовлитворительно</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main-steps">
        <div className="container">
          <ul className="progressbar">
            <li className="main-step-1 active">
              <span>Поступление</span>
              </li>
            <li className="main-step-2 active">
              <span>Зимняя сессия</span>
              </li>
            <li className="main-step-3 active">Летняя сессия</li>
            <li className="main-step-4 active">2 курс</li>
            <li className="main-step-5 active">Зимняя сессия</li>
            <li className="main-step-6 active">Зимняя сессия</li>
            <li className="main-step-7 active">3 курс</li>
            <li className="main-step-8 active">Зимняя сессия</li>
            <li className="main-step-9 active">Зимняя сессия</li>
            <li className="main-step-10 active">4 курс</li>
            <li className="main-step-11 active">Зимняя сессия</li>
            <li className="main-step-12 active">Зимняя сессия</li>
            <li className="main-step-13 active">Преддипломная<br/>практика</li>
            <li className="main-step-14 active">Гос Экзамены</li>
            <li className="main-step-15">Защита диплома</li>
            <li className="main-step-16">Каникулы</li>
          </ul>
        </div>
      </div>

    </div>

  </>
  );
};

export default Main;