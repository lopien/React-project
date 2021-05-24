import React from 'react';
import './general_information.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';

const General_information = () => {
  return(
    <>
      <Menu/>
      <div className="personal_information">
        <Header/>
        <div className="general_information-info">
          <table>
            <caption><strong>Направление подготовки высшего образования - бакалавриат: 09.03.01 Информатика и вычислительная техника</strong></caption>
            <tbody>
              <tr>
                <th>ФИО</th>
                <td className="last-child">Хафизова Эльвира Айдаровна</td>
              </tr>
              <tr>
                <th>Факультет</th>
                <td className="last-child">Институт математики, информационных технологий и физики</td>
              </tr>
              <tr>
                <th>Форма обучения</th>
                <td className="last-child">Очная</td>
              </tr>
              <tr>
                <th>Квалификация</th>
                <td className="last-child">Бакалавр</td>
              </tr>
              <tr>
                <th>Группа</th>
                <td className="last-child">ОАБ-09.03.01-41</td>
              </tr>
              <tr>
                <th>Номер зачетки</th>
                <td className="last-child">7721</td>
              </tr>
              <tr>
                <th>Профиль/специализация	</th>
                <td className="last-child">09.03.01.01 Вычислительные машины, комплексы, системы и сети</td>
              </tr>
            </tbody>
          </table>

        </div>

        <span className="warning">Если обнаружили ошибки, обращайтесь в свой деканат!</span>
      </div>
    </>
    );
  };

export default General_information;