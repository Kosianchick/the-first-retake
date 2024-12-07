import { createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ShapesLineContext = createContext();

const ShapesLineProvider = ({ children }) => {
    const [shapes, setShapes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/shapes' )
            .then(response => {
                setShapes(response.data)
            })
            .catch(error => console.error('Error loading shapes:', error));
    }, []);

    const incrementClicks = (id) => {
        const shape = shapes.find(shape => shape.id === id);
        if (!shape) return;
    
        const updatedClicks = shape.clicks + 1;
    
        axios.patch(`http://localhost:5000/shapes/${id}`, { clicks: updatedClicks })
        .then(() => {
            setShapes(shapes.map(shape => 
                shape.id === id ? { ...shape, clicks: updatedClicks } : shape
            ));
        })
        .catch(error => console.error('Error updating clicks:', error));
    };
    
    
    
    return (
        <ShapesLineContext.Provider value={{ shapes, incrementClicks }}>
            {children}
        </ShapesLineContext.Provider>
    );
};

ShapesLineProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { ShapesLineContext, ShapesLineProvider };
