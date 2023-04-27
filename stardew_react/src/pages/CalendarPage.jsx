import { SeasonalCalendar } from "../components/SeasonalCalendar"

export const CalendarPage = () => {
    return (
        <div className="menu page-content">
            <div className="calendar-header">
                <button>Left Button</button>
                <h1>Spring</h1>
                <button>Right Button</button>
            </div>
            <div>
                <SeasonalCalendar />
            </div>
        </div>
    )
}