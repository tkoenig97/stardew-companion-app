import { useEffect, useState } from 'react';
import { DayCell } from './DayCell';
import { getSeasonalData } from '../utilities';
import { capitalizeFirstLetter } from '../utilities';

export const SeasonalCalendar = () => {
    const [currSeason, setCurrSeason] = useState('spring');
    const [seasonalData, setSeasonalData] = useState(
        getSeasonalData({ season: currSeason })
    );

    useEffect(() => {
        setSeasonalData(getSeasonalData({ season: currSeason }));
    }, [currSeason]);

    // Generate an array of 28 DayCell components
    const daysArray = Array.from({ length: 28 }, (_, i) => (
        <DayCell day={i + 1} data={seasonalData} />
    ));

    // Split the array into weeks of 7
    const calendarWeeks = Array.from({ length: 4 }, (_, i) =>
        daysArray.slice(i * 7, (i + 1) * 7)
    );

    console.log(seasonalData);

    return (
        <>
            <div className="calendar-header">
                <button>Left Button</button>
                <h1>{capitalizeFirstLetter(currSeason)}</h1>
                <button>Right Button</button>
            </div>
            <div className="calendar">
                <div className="days-label">
                    <h3>M</h3>
                    <h3>T</h3>
                    <h3>W</h3>
                    <h3>Th</h3>
                    <h3>F</h3>
                    <h3>Sa</h3>
                    <h3>Su</h3>
                </div>
                {calendarWeeks.map((week, index) => (
                    <div className="calendar-row" key={index}>
                        {week}
                    </div>
                ))}
            </div>
        </>
    );
};
