import './Calendar.css';
import {useEffect, useState} from "react";

function getCurrentWeekdayIndex(date = new Date()) {
  return (date.getDay() + 6) % 7;
}

function getCurrentWeekDates() {
  const today = new Date();

  const day = today.getDay(); // 0 (вс) – 6 (сб)
  const diffToMonday = (day + 6) % 7;

  const monday = new Date(today);
  monday.setDate(today.getDate() - diffToMonday);

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    weekDates.push(date);
  }

  weekDates.map(date => date.toLocaleDateString('ru-RU'));

  return weekDates;
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDateFullCapitalized(date = new Date()) {
  const formatted = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return capitalizeFirstLetter(formatted);
}

function getWeekdayFull(date = new Date()) {
  return capitalizeFirstLetter(date.toLocaleDateString('ru-RU', { weekday: 'long' }));
}


function Calendar({ onDateChange } : {onDateChange: (date: Date) => void}) {

  const [pickedDayIndex, setPickedDayIndex] = useState(getCurrentWeekdayIndex());
  const [weekDays, setWeekDays] = useState(getCurrentWeekDates());

  useEffect(() => {
    if (onDateChange) {
      onDateChange(new Date(weekDays[pickedDayIndex]));
    }
  }, [pickedDayIndex]);

  return (
    <div className="calendar">
      <p>{getWeekdayFull(new Date(weekDays[pickedDayIndex]))}, {formatDateFullCapitalized(new Date(weekDays[pickedDayIndex]))}</p>
      <table className="calendar-table">
        <tbody>
          <tr>
            <td>ПН</td>
            <td>ВТ</td>
            <td>СР</td>
            <td>ЧТ</td>
            <td>ПТ</td>
            <td>СБ</td>
            <td>ВС</td>
          </tr>
          <tr>
            <td onClick={() => setPickedDayIndex(0)}><span className={pickedDayIndex === 0 ? "picked-day" : "default-day"}>{new Date(weekDays[0]).getDate()}</span></td>
            <td onClick={() => setPickedDayIndex(1)}><span className={pickedDayIndex === 1 ? "picked-day" : "default-day"}>{new Date(weekDays[1]).getDate()}</span></td>
            <td onClick={() => setPickedDayIndex(2)}><span className={pickedDayIndex === 2 ? "picked-day" : "default-day"}>{new Date(weekDays[2]).getDate()}</span></td>
            <td onClick={() => setPickedDayIndex(3)}><span className={pickedDayIndex === 3 ? "picked-day" : "default-day"}>{new Date(weekDays[3]).getDate()}</span></td>
            <td onClick={() => setPickedDayIndex(4)}><span className={pickedDayIndex === 4 ? "picked-day" : "default-day"}>{new Date(weekDays[4]).getDate()}</span></td>
            <td onClick={() => setPickedDayIndex(5)}><span className={pickedDayIndex === 5 ? "picked-day" : "default-day"}>{new Date(weekDays[5]).getDate()}</span></td>
            <td onClick={() => setPickedDayIndex(6)}><span className={pickedDayIndex === 6 ? "picked-day" : "default-day"}>{new Date(weekDays[6]).getDate()}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;

