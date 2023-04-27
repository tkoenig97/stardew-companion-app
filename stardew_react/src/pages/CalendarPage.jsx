import { DayCell } from "../components/DayCell"

export const CalendarPage = () => {
    return (
        <div className="menu page-content">
            <div className="calendar-header">
                <button>Left Button</button>
                <h1>Spring</h1>
                <button>Right Button</button>
            </div>
            <div>
                <DayCell />
            </div>
        </div>
    )
}