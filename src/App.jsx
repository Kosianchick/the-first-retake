import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Header';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Layout from './Layout'; 
import './App.css';

function App() {
    const [redCount, setRedCount] = useState(0);
    const [yellowCount, setBlueCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);

    const handleShapeClick = (color) => {
        if (color === 'red') {
            setRedCount(prevCount => prevCount + 1);
        } else if (color === 'yellow') {
            setBlueCount(prevCount => prevCount + 1);
        } else if (color === 'green') {
            setGreenCount(prevCount => prevCount + 1);
        }
    };

    const stats = { red: redCount, blue: yellowCount, green: greenCount };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Header /><Outlet /></>,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "horizontal",
                    element: <Layout direction="horizontal" stats={stats} onShapeClick={handleShapeClick} />,
                },
                {
                    path: "vertical",
                    element: <Layout direction="vertical" stats={stats} onShapeClick={handleShapeClick} />,
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router}>
            <div>
                <Outlet />
            </div>
        </RouterProvider>
    );
}

export default App;
