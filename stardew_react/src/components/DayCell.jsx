import { useState } from 'react';

export const DayCell = ({ day, data }) => {
    const [checkedOff, setCheckedOff] = useState(false);

    const handleClick = () => {
        setCheckedOff(!checkedOff);
    };

    const imgUrl = data[day] || null;

    return (
        <div className="cell" onClick={handleClick}>
            <div className="day-number">{day}</div>
            {imgUrl && (
                <img className="cell-img" src={imgUrl} alt={data[day]} />
            )}
            {checkedOff && <div className="x-mark">X</div>}
        </div>
    );
};
