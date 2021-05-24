import React from 'react';
import './plan.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';

const Plan = () => {
  return(
    <>
      <Menu/>
      <div className="personal_information">
        <Header/>
        <div className="general_information-info">
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
                <th className="last-child">Преподаватель</th>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Высокопроизводительные вычисления</td>
                <td>72/50</td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child">Подробно</td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Инструментальные средства разработки автоматизированных систем</td>
                <td>108/60</td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child">Подробно</td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Методы и модели теории графов и сетевого моделирования</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Модели и методы разработки программного обеспечения VI</td>
                <td>108/60</td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Обучающие системы</td>
                <td>72/50</td>
                <td> </td>
                <td> </td>
                <td className="last-child"> </td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Оптимизация на сетях и графах</td>
                <td> </td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child">Подробно</td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>3D анимация</td>
                <td>108/60</td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child">Подробно</td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Философия</td>
                <td>72/40</td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child">Подробно</td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>ЭВМ и периферийные устройства</td>
                <td>72/20</td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child">Подробно</td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Экология</td>
                <td>108/84</td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child">Подробно</td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Методы и средства проектирования информационных систем и технологий	</td>
                <td>108/60</td>
                <td>Открыть</td>
                <td>Посмотреть</td>
                <td className="last-child">Подробно</td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Производственная практика, преддипломная</td>
                <td>108/</td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child">Подробно</td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Выпускная квалификационная работа</td>
                <td>216/</td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child">Подробно</td>
              </tr>
              <tr>
                <td>Б1.В</td>
                <td>Зач</td>
                <td>Государственный экзамен</td>
                <td>108/</td>
                <td>Открыть</td>
                <td> </td>
                <td className="last-child">Подробно</td>
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