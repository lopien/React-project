import React from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import './schedule.css';

const Schedule = () => {
  return(
    <>
      <Menu/>
      <Header/>
      <div className="shedule">
        
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
        
        <div className="shedule-info">

          <table>
            <caption><strong>Расписсание на 8 семестр</strong></caption>
            <tbody>
              <tr>
                <th>Пара</th>
                <th>Понедельник</th>
                <th>Вторник</th>
                <th>Среда</th>
                <th>Четверг</th>
                <th>Пятница</th>
                <th>Суббота</th>
                <th className="shedule-last-child">Пара</th>
              </tr>
              <tr>
                <td>I: 8.00-9.30</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="shedule-last-child">I: 8.00-9.30</td>
              </tr>
              <tr>
                <td>II: 9.40-11.10</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="shedule-last-child">II: 9.40-11.10</td>
              </tr>
              <tr>
                <td>III: 11.40-13.10</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="shedule-last-child">III: 11.40-13.10</td>
              </tr>
              <tr>
                <td>IV: 13.20-14.50</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="shedule-last-child">IV: 13.20-14.50	</td>
              </tr>
              <tr>
                <td>V: 15.10-16.40</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="shedule-last-child">V: 15.10-16.40</td>
              </tr>
              <tr>
                <td>VI: 16.50-18.20</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="shedule-last-child">VI: 16.50-18.20</td>
              </tr>
              <tr>
                <td>VII: 18.30-20.00</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="shedule-last-child">VII: 18.30-20.00</td>
              </tr>
              <tr>
                <td>VIII: 20.10-21.40</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="shedule-last-child">VIII: 20.10-21.40</td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
    </>
    );
  };

export default Schedule;