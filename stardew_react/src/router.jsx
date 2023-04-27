import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import App from "./App";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { CalendarPage } from "./pages/CalendarPage";

const Router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <IndexPage />
            },
            {
                path: '/signin',
                element: <SignInPage />
            },
            {
                path: '/signup',
                element: <SignUpPage />
            },
            {
                path: '/calendar',
                element: <CalendarPage />
            }
        ]
    }
])

export default Router