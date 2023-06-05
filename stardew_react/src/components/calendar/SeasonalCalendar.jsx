import { useEffect, useState, useMemo } from 'react';
import { DayCell } from './DayCell';
import { getSeasonalData } from '../../utils/generalUtils';
import { capitalizeFirstLetter } from '../../utils/generalUtils';

export const SeasonalCalendar = () => {
    const seasons = ['spring', 'summer', 'fall', 'winter'];
    const [currSeasonIndex, setCurrSeasonIndex] = useState(0);
    const [currSeason, setCurrSeason] = useState(seasons[currSeasonIndex]);
    const [seasonalData, setSeasonalData] = useState(
        getSeasonalData({ season: currSeason })
    );
    const [checkedOffStates, setCheckedOffStates] = useState(
        Array.from({ length: 28 }, () => false)
    );
    const [checkedOffSeasonalStates, setCheckedOffSeasonalStates] = useState(
        seasons.reduce((acc, season) => ({ ...acc, [season]: [] }), {})
    );

    // Use useMemo to memoize the checkedOff state of each DayCell
    const checkedOff = useMemo(() => checkedOffStates, [checkedOffStates]);

    // Reset the checkedOff state of each DayCell when currSeasonIndex changes
    useEffect(() => {
        setCheckedOffStates(Array.from({ length: 28 }, () => false));
    }, [currSeasonIndex]);

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

    // Remove dayCell checks when season changes
    const resetCheckedOffSeasonalState = (season, index) => {
        setCheckedOffSeasonalStates((prev) => {
            const newState = { ...prev };
            newState[season][index] = false;
            return newState;
        });
    };

    // Generate an array of 28 DayCell components
    const daysArray = Array.from({ length: 28 }, (_, i) => {
        const checkedOffValue = checkedOffStates[i];
        const seasonalCheckedOff = checkedOffSeasonalStates[currSeason][i];
        return (
            <DayCell
                key={i}
                day={i + 1}
                data={seasonalData}
                checkedOff={checkedOffValue || seasonalCheckedOff}
                setCheckedOff={(value) => {
                    setCheckedOffStates((prev) => {
                        const newState = [...prev];
                        newState[i] = value;
                        return newState;
                    });
                    setCheckedOffSeasonalStates((prev) => {
                        const newState = { ...prev };
                        newState[currSeason][i] = value;
                        return newState;
                    });
                }}
                resetCheckedOff={() =>
                    resetCheckedOffSeasonalState(currSeason, i)
                }
            />
        );
    });

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
