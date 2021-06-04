import React from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import './questioning.css';

const Appraisals = () => {
  return(
    <>
      <Menu/>
      <Header/>
      <div className="questioning">

        <div className="questioning-info">

          <table>
            <tbody>
              <tr>
                <th>Тема</th>
                <th>Дата заполнения</th>
                <th>Дата начала</th>
                <th>Дата окончания</th>
                <th>Автор</th>
                <th className="questioning-last-child">Анонимность</th>
              </tr>
              <tr>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-last-child"> </td>
              </tr>
              <tr>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-last-child"> </td>
              </tr>
              <tr>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-last-child"> </td>
              </tr>
              <tr>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-last-child"> </td>
              </tr>
              <tr>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-padding"> </td>
                <td className="questioning-last-child"> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
    );
  };

export default Appraisals;