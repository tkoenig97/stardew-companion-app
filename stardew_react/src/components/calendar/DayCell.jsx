import Flag from '../../assets/images/calendar/calendar-flag.png';
import Star from '../../assets/images/calendar/calendar-star.png';

export const DayCell = ({ day, data, checkedOff, setCheckedOff }) => {
    const handleClick = () => {
        setCheckedOff(!checkedOff);
    };

    const calendarImg = data[day] || null;

    return (
        <div className="cell" onClick={handleClick}>
            <div className="day-number">{day}</div>
            {calendarImg &&
                (Array.isArray(calendarImg) ? (
                    <>
                        <img
                            className="calendar-star"
                            src={Star}
                            alt={data[day]}
                        />
                        <img
                            className="cell-img"
                            src={calendarImg[1]}
                            alt={data[day]}
                        />
                    </>
                ) : (
                    <img
                        className={`cell-img ${
                            calendarImg === Star ? 'calendar-star' : ''
                        } ${calendarImg === Flag ? 'calendar-flag' : ''}`}
                        src={calendarImg}
                        alt={data[day]}
                    />
                ))}
            {checkedOff && <div className="x-mark">X</div>}
        </div>
    );
};
