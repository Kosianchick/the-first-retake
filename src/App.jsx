import { useState } from 'react';
import ShapesLine from './ShapesLine';
import StatsBar from './StatsBar';
import './App.css';

function App() {
    const [direction, setDirection] = useState("horizontal");
    const [redCount, setRedCount] = useState(0);
    const [yellowCount, setBlueCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);

    const handleShapeClick = (color) => {
        if (color === 'red') {
            setRedCount(redCount + 1);
        } else if (color === 'yellow') {
            setBlueCount(yellowCount + 1);
        } else if (color === 'green') {
            setGreenCount(greenCount + 1);
        }
    };

    const toggleDirection = () => {
        setDirection(prevDirection => prevDirection === "horizontal" ? "vertical" : "horizontal");
    };

    return (
        <div>
            <StatsBar toggleDirection={toggleDirection} stats={{ red: redCount, blue: yellowCount, green: greenCount }} />
            <h1 className={direction === "horizontal" ? 'Hor' : 'Ver'}>
                {direction === "horizontal" ? "Горизонтальний ряд" : "Вертикальний ряд"}
            </h1>
            <div style={{ display: 'flex', flexDirection: direction === "horizontal" ? 'row' : 'column' }}>
                <ShapesLine direction={direction}
                  onShapeClick={handleShapeClick}
                  redCount={redCount}
                  yellowCount={yellowCount}
                  greenCount={greenCount} />
            </div>
        </div>
    );
}

export default App;
