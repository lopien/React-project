import React from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import './rating.css';

const Rating = () => {
  return(
    <>
      <Menu/>
      <Header/>
      <div className="rating">
        
        <div className="semesters">
          <span className="semesters_title">Семестры:</span>
          <a className="semester" href="/"><img src="img/numbers/1.svg" alt=""/></a>
          <a className="semester" href="/"><img src="img/numbers/2.svg" alt=""/></a>
          <a className="semester" href="/"><img src="img/numbers/3.svg" alt=""/></a>
          <a className="semester" href="/"><img src="img/numbers/4.svg" alt=""/></a>
          <a className="semester" href="/"><img src="img/numbers/5.svg" alt=""/></a>
          <a className="semester" href="/"><img src="img/numbers/6.svg" alt=""/></a>
          <a className="semester" href="/"><img src="img/numbers/7.svg" alt=""/></a>
          <a className="semester" href="/"><img src="img/numbers/8.svg" alt=""/></a>
        </div>
    
        <div className="rating-info">

          <table>
            <caption><strong>Расписсание на 8 семестр</strong></caption>
            <tbody>
              <tr>
                <th>Дисциплина</th>
                <th>РК0</th>
                <th>РК1</th>
                <th>РК2</th>
                <th>РК3</th>
                <th>Экз/зач (РК4)</th>
                <th>Сумма баллов</th>
                <th>Место в группе</th>
                <th className="rating-last-child">Место по спец/напр</th>
              </tr>
              <tr>
                <td>Высокопроизводительные вычисления	</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="rating-last-child"> </td>
              </tr>
              <tr>
                <td>Инструментальные средства разработки автоматизированных систем</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="rating-last-child"> </td>
              </tr>
              <tr>
                <td>Методы и средства проектирования информационных систем и технологий</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="rating-last-child"> </td>
              </tr>
              <tr>
                <td>Оптимизация на сетях и графах</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="rating-last-child"> </td>
              </tr>
              <tr>
                <td>Философия</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="rating-last-child"> </td>
              </tr>
              <tr>
                <td>ЭВМ и периферийные устройства</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="rating-last-child"> </td>
              </tr>
              <tr>
                <td>ЭВМ и периферийные устройства</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="rating-last-child"> </td>
              </tr>
              <tr>
                <td>3D анимация</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="rating-last-child"> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
    );
  };

export default Rating;