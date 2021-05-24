import React from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import './appraisals.css';

const Appraisals = () => {
  return(
    <>
      <Menu/>
      <div className="personal_information">
        <Header/>
        <div className="personal_information-info">

          <table>
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
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
                <td className="padding"> </td>
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