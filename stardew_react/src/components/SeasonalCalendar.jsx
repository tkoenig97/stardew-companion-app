import { DayCell } from './DayCell';

export const SeasonalCalendar = () => {
    // Generate an array of 28 DayCell components
    const daysArray = Array.from({ length: 28 }, (_, i) => (
        <DayCell day={i + 1} />
    ));

    // Split the array into weeks of 7
    const calendarWeeks = Array.from({ length: 4 }, (_, i) =>
        daysArray.slice(i * 7, (i + 1) * 7)
    );

    return (
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
            {calendarWeeks.map((chunk, index) => (
                <div className="calendar-row" key={index}>
                    {chunk}
                </div>
            ))}
        </div>
    );
};
