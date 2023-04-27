export const DayCell = ({ index }) => {
    return (
        <div className="cell">
            <div className="day-number">{index + 1}</div>
        </div>
    );
};
