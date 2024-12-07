import PropTypes from 'prop-types';
import Shape from './Shape';
import './ShapesLine.css';

function ShapesLine({ direction, onShapeClick, redCount, yellowCount, greenCount }) {
    const containerClass = direction === 'vertical' ? 'shapes-line vertical' : 'shapes-line horizontal';

    return (
        <div className={containerClass}>
             <Shape tfrColor="red" tfrType="retangle" onClick={() => onShapeClick('red')} count={redCount} />
            <Shape tfrColor="yellow" tfrType="circle" onClick={() => onShapeClick('yellow')} count={yellowCount} />
            <Shape tfrColor="green" tfrType="triangle" onClick={() => onShapeClick('green')} count={greenCount} />
        </div>
    );
}

ShapesLine.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
    onShapeClick: PropTypes.func.isRequired,
    redCount: PropTypes.number.isRequired,
    yellowCount: PropTypes.number.isRequired,
    greenCount: PropTypes.number.isRequired
};

export default ShapesLine;
