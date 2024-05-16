import { useState } from 'react';
import PropTypes from 'prop-types';
import Shape from './Shape';
import './ShapesLine.css';

function ShapesLine({ direction }) {
    const [redCount, setRedCount] = useState(0);
    const [blueCount, setBlueCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);

    const handleShapeClick = (color) => {
        if (color === 'red') {
            setRedCount(redCount + 1);
        } else if (color === 'yellow') {
            setBlueCount(blueCount + 1);
        } else if (color === 'green') {
            setGreenCount(greenCount + 1);
        }
    };

    const containerClass = direction === 'vertical' ? 'shapes-line vertical' : 'shapes-line horizontal';

    return (
        <div className={containerClass}>
            <Shape tfrColor="red" tfrType="retangle" onClick={() => handleShapeClick('red')} count={redCount} />
            <Shape tfrColor="yellow" tfrType="circle" onClick={() => handleShapeClick('yellow')} count={blueCount} />
            <Shape tfrColor="green" tfrType="triangle" onClick={() => handleShapeClick('green')} count={greenCount} />
        </div>
    );
}

ShapesLine.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired
};

export default ShapesLine;