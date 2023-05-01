import { createBrowserRouter } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import App from './App';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { CalendarPage } from './pages/CalendarPage';
import { NpcGiftPage } from './pages/NpcGiftPage';
import { BundlePage } from './pages/BundlePage';
import { RecipePage } from './pages/RecipePage';
import { LivestockPage } from './pages/LivestockPage';
import { FarmingPage } from './pages/FarmingPage';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <IndexPage />,
            },
            {
                path: '/calendar',
                element: <CalendarPage />,
            },
            {
                path: '/gifts',
                element: <NpcGiftPage />,
            },
            {
                path: '/farming',
                element: <FarmingPage />,
            },
            {
                path: '/livestock',
                element: <LivestockPage />,
            },
            {
                path: '/recipes',
                element: <RecipePage />,
            },
            {
                path: '/bundles',
                element: <BundlePage />,
            },
            {
                path: '/signin',
                element: <SignInPage />,
            },
            {
                path: '/signup',
                element: <SignUpPage />,
            },
        ],
    },
]);

export default Router;
