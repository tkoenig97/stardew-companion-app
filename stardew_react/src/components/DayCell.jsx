import { useState } from 'react';
import Flag from '../assets/images/calendar/calendar-flag.png';
import Star from '../assets/images/calendar/calendar-star.png';

export const DayCell = ({ day, data }) => {
    const [checkedOff, setCheckedOff] = useState(false);

    const handleClick = () => {
        setCheckedOff(!checkedOff);
    };

    const calendarImg = data[day] || null;

    return (
        <div className="cell" onClick={handleClick}>
            <div className="day-number">{day}</div>
            {calendarImg && (
                <img
                    className={`cell-img ${
                        calendarImg === Flag
                            ? 'calendar-flag'
                            : calendarImg === Star
                            ? 'calendar-star'
                            : ''
                    }`}
                    src={calendarImg}
                    alt={data[day]}
                />
            )}
            {checkedOff && <div className="x-mark">X</div>}
        </div>
    );
};
