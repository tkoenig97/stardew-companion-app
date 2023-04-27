import { useState } from 'react';

export const DayCell = ({ day }) => {
    const [checkedOff, setCheckedOff] = useState(false);

    const handleClick = () => {
        setCheckedOff(!checkedOff)
    }

    return (
        <div className="cell" onClick={handleClick}>
            <div className="day-number">{day}</div>
            {checkedOff && <div className='x-mark'>X</div>}
        </div>
    );
};
