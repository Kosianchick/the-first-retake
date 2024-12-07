import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ShapesLineContext = createContext({
    shapes: [],
    incrementClicks: () => {},
    isLoading: false,
    error: null
});

const googleUrl = import.meta.env.VITE_apiURL;

export const ShapesLineProvider = ({ children }) => {
    const [shapes, setShapes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchShapes();
    }, []);

    const fetchShapes = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(googleUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify({ action: 'getStats' })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setShapes(data);
        } catch (error) {
            console.error('Error loading shapes:', error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const incrementClicks = async (id) => {
        try {
            const response = await fetch(googleUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify({ action: 'incrementCount', id })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.success) {
                setShapes(shapes => shapes.map(shape =>
                    shape.id === id ? { ...shape, clicks: data.newCount } : shape
                ));
            } else {
                throw new Error('Update not successful');
            }
        } catch (error) {
            console.error('Error updating clicks:', error);
            setError(error.message);
        }
    };

    const resetClicks = async () => {
        try {
            const response = await fetch(googleUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify({ action: 'resetClicks' })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            if (result.success) {
                setShapes(shapes.map(shape => ({ ...shape, clicks: 0 })));
            } else {
                throw new Error('Reset not successful');
            }
        } catch (error) {
            console.error('Error resetting clicks:', error);
            setError(error.message);
        }
    };

    return (
        <ShapesLineContext.Provider value={{ shapes, incrementClicks, resetClicks, isLoading, error }}>
            {children}
        </ShapesLineContext.Provider>
    );
};

ShapesLineProvider.propTypes = {
    children: PropTypes.node.isRequired
};
