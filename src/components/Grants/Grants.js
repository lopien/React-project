import React from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import './grants.css';

const Grants = () => {
  return(
    <>
      <Menu/>
      <div className="personal_information">
        <Header/>
          <div className="grants">
    
          <span className="grants_title">Выберите интересующий год</span>
          <button className="active_btn grants_btn">2021</button>
          <button className="grants_btn">2020</button>
          <button className="grants_btn">2019</button>
          <button className="grants_btn">2018</button>
          <button className="grants_btn">2017</button>

          <span className="grants_title">Выберите интересующий месяц:</span>
          <button className="active_btn grants_btn">Янв</button>
          <button className="grants_btn">Фев</button>
          <button className="grants_btn">Март</button>
          <button className="grants_btn">Апр</button>
          <button className="grants_btn">Май</button>
          <button className="grants_btn">Июнь</button>
          <button className="grants_btn">Июль</button>
          <button className="grants_btn">Авг</button>
          <button className="grants_btn">Сент</button>
          <button className="grants_btn">Окт</button>
          <button className="grants_btn">Нояб</button>
          <button className="grants_btn">Дек</button>
        </div>
        <div className="general_information-info">
          <table>
            <caption><strong>ЯНВАРЬ 2021</strong></caption>
            <tbody>
              <tr>
                <th>Код</th>
                <th>Наименование</th>
                <th>Кат</th>
                <th>Отдел</th>
                <th>Окл/Тариф</th>
                <th>Время</th>
                <th className="last-child">Сумма</th>
              </tr>
              <tr>
                <td className="description" colSpan="7">Вед. шифр 200_7873 №405 за 01.21 УдГУ_Бюджет_КФО5(стипенд) (011) Стипендия (расч. Докукина Е.В.) ИМИТиФ - стипендия студентам, бюджет - 296, 0706, 01-10</td>
              </tr>
              <tr>
                <td className="description" colSpan="7">начислено</td>
              </tr>
              <tr>
                <th>520х</th>
                <th>Академическая стипендия из стипендиального фонда сдавшим сессию на "хорошо" или на "хорошо" и "отлично"</th>
                <th> </th>
                <th>ИМИТиФ</th>
                <th>3000</th>
                <th>31</th>
                <th className="last-child">3000,00</th>
              </tr>
              <tr>
                <td className="description" colSpan="7">к выдаче</td>
              </tr>
              <tr>
                <th>431</th>
                <th>Вклад (перечисление з/п в банк на лиц. счет)</th>
                <th> </th>
                <th>ИМИТиФ</th>
                <th> </th>
                <th> </th>
                <th className="last-child">3000,00</th>
              </tr>
              <tr>
                <td className="description" colSpan="7">к выдаче</td>
              </tr>
              <tr>
                <th>ВклП</th>
                <th>Фактическое перечисление вкладов в банк</th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th className="last-child"> </th>
              </tr>
            </tbody>
          </table>

        </div>

        <span className="warning">Если обнаружили ошибки, обращайтесь в свой деканат!</span>
      </div>
    </>
    );
  };

export default Grants;