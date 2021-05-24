import React from 'react';
import './personal_information.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
// import { ShowMenu } from "../Menu/showMenu";

const Personal_information = () => {
  return(
    <>
      <Menu/>
      <div className="personal_information">
        <Header/>
        <div className="personal_information-info">
          <table>
            <caption><strong>Общиие сведения</strong></caption>
            <tbody>
              <tr>
                <th className="th">ФИО</th>
                <td className="last-child">Хафизова Эльвира Айдаровна</td>
              </tr>
              <tr>
                <th className="th">ДАТА РОЖДЕНИЯ</th>
                <td className="last-child">27.10.1998</td>
              </tr>
            </tbody>
          </table>

          <table>
            <caption><strong>Адреса</strong></caption>
            <tbody>
              <tr>
                <th className="th">место рождения по паспорту</th>
                <td className="last-child">Г. Ижевск (18.07.17)</td>
              </tr>
              <tr>
                <th className="th">регистрации</th>
                <td className="last-child">г. Ижевск, Архитектора П.П. Берша ул., д.1, кв.250 (10.06.14)</td>
              </tr>
              <tr>
                <th className="th">e-mail</th>
                <td className="last-child">hafizowaelvira@yandex.ru</td>
              </tr>
            </tbody>
          </table>

          <table>
            
            <caption><strong>Личные документы</strong></caption>
            <tbody>
              <tr>
                <td className="last-child">Паспорт гражданина РФ, серия 94 **, номер ******, выдан 08.11.2018 МВД по Удмуртской Республике</td>
              </tr>
              <tr>
                <td className="last-child">Свидетельство о постановке на учет в ГНИ, ИНН 183********9, серия 18, номер 00******5, дата выдачи 28.04.2006</td>
              </tr>
              <tr>
                <td className="last-child">Аттестат о среднем общем образовании, выданный МБОУ "Средняя общеобразовательная школа №40" 
      г.Ижевска УР, № 01804000002707 серия , дата выдачи 28.06.2017, год выпуска 2017
                </td>
              </tr>
              <tr>
                <td className="last-child">Паспорт гражданина РФ, серия 94 **, номер ******, выдан 01.11.2012 отделом УФМС России по УР 
      в Октябрьском р-не г.Ижевска
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <span className="warning">Если обнаружили ошибки, обращайтесь в свой деканат!</span>
      </div>
    </>
    );
  };

export default Personal_information;