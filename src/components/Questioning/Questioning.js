import React from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import './questioning.css';

const Appraisals = () => {
  return(
    <>
      <Menu/>
      <div className="personal_information">
        <Header/>
        <div className="appraisal">
          <button className="active_btn grants_btn">РК-0</button>
          <button className="grants_btn">РК-1</button>
          <button className="grants_btn">РК-2</button>
          <button className="grants_btn">РК-3</button>
          <button className="grants_btn">Зач</button>
          <button className="grants_btn">Экз</button>

        </div>

        <div className="personal_information-info">
          <table>
            <caption><strong>Список оценок за 8 семестр</strong></caption>
            <tbody>
              <tr>
                <th>Тема</th>
                <th>Дата заполнения</th>
                <th>Дата начала</th>
                <th>Дата окончания</th>
                <th>Автор</th>
                <th className="last-child">Анонимность</th>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="last-child"> </td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </>
    );
  };

export default Appraisals;