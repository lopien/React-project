import React from 'react';
import './plan.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';

const Plan = () => {
  return(
    <>
      <Menu/>
      <Header/>
      <div className="plan">
        <div className="plan-info">
          <table>
            <caption><strong>Учебный план за 8 семестр</strong></caption>
            <tbody>
              <tr>
                <th>Цикл</th>
                <th>Вид контроля</th>
                <th>Дисциплина</th>
                <th>Часы (Вс/Ауд)</th>
                <th>Материалы</th>
                <th>Литература</th>
                <th className="plan-last-child">Преподаватель</th>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Высокопроизводительные вычисления</td>
                <td className="td">72/50</td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child">Подробно</td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Инструментальные средства разработки автоматизированных систем</td>
                <td className="td">108/60</td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child">Подробно</td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Методы и модели теории графов и сетевого моделирования</td>
                <td className="td"> </td>
                <td className="td"> </td>
                <td className="td"> </td>
                <td className="plan-last-child"> </td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Модели и методы разработки программного обеспечения VI</td>
                <td className="td">108/60</td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child"> </td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Обучающие системы</td>
                <td className="td">72/50</td>
                <td className="td"> </td>
                <td className="td"> </td>
                <td className="plan-last-child"> </td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Оптимизация на сетях и графах</td>
                <td className="td"> </td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child">Подробно</td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">3D анимация</td>
                <td className="td">108/60</td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child">Подробно</td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Философия</td>
                <td className="td">72/40</td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child">Подробно</td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">ЭВМ и периферийные устройства</td>
                <td className="td">72/20</td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child">Подробно</td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Экология</td>
                <td className="td">108/84</td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child">Подробно</td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Методы и средства проектирования информационных систем и технологий	</td>
                <td className="td">108/60</td>
                <td className="td">Открыть</td>
                <td className="td">Посмотреть</td>
                <td className="plan-last-child">Подробно</td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Производственная практика, преддипломная</td>
                <td className="td">108/</td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child">Подробно</td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Выпускная квалификационная работа</td>
                <td className="td">216/</td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child">Подробно</td>
              </tr>
              <tr>
                <td className="td">Б1.В</td>
                <td className="td">Зач</td>
                <td className="td">Государственный экзамен</td>
                <td className="td">108/</td>
                <td className="td">Открыть</td>
                <td className="td"> </td>
                <td className="plan-last-child">Подробно</td>
              </tr>
            </tbody>
          </table>

        </div>

        <span className="warning">Если обнаружили ошибки, обращайтесь в свой деканат!</span>
      </div>
    </>
    );
  };

export default Plan;