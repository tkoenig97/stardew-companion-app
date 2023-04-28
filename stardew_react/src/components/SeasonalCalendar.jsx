import { useEffect, useState } from 'react';
import { DayCell } from './DayCell';
import { getSeasonalData } from '../utilities';
import { capitalizeFirstLetter } from '../utilities';

export const SeasonalCalendar = () => {
    const seasons = ['spring', 'summer', 'fall', 'winter'];
    const [currSeasonIndex, setCurrSeasonIndex] = useState(0);
    const [currSeason, setCurrSeason] = useState(seasons[currSeasonIndex]);
    const [seasonalData, setSeasonalData] = useState(
        getSeasonalData({ season: currSeason })
    );

    useEffect(() => {
        setSeasonalData(getSeasonalData({ season: currSeason }));
    }, [currSeason]);

    useEffect(() => {
        setCurrSeason(seasons[currSeasonIndex]);
    }, [currSeasonIndex]);

    // Cycle left through seasons array
    const handleLeftClick = () => {
        setCurrSeasonIndex(
            currSeasonIndex === 0 ? seasons.length - 1 : currSeasonIndex - 1
        );
    };

    // Cycle right through seasons array
    const handleRightClick = () => {
        setCurrSeasonIndex(
            currSeasonIndex === seasons.length - 1 ? 0 : currSeasonIndex + 1
        );
    };

    // Generate an array of 28 DayCell components
    const daysArray = Array.from({ length: 28 }, (_, i) => (
        <DayCell day={i + 1} data={seasonalData} />
    ));

    // Split the array into weeks of 7
    const calendarWeeks = Array.from({ length: 4 }, (_, i) =>
        daysArray.slice(i * 7, (i + 1) * 7)
    );

    return (
        <>
            <div className="calendar-header">
                <button onClick={handleLeftClick}>Left Button</button>
                <h1>{capitalizeFirstLetter(currSeason)}</h1>
                <button onClick={handleRightClick}>Right Button</button>
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
