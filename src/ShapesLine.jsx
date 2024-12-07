import PropTypes from 'prop-types';
import Shape from './Shape';
import './ShapesLine.css';

function ShapesLine({ direction, onShapeClick}) {
    const containerClass = direction === 'vertical' ? 'shapes-line vertical' : 'shapes-line horizontal';

    return (
        <div className={containerClass}>
            <Shape tfrColor="red" tfrType="retangle" onClick={() => onShapeClick('red')}/>
            <Shape tfrColor="yellow" tfrType="circle" onClick={() => onShapeClick('blue')} />
            <Shape tfrColor="green" tfrType="triangle" onClick={() => onShapeClick('green')}/>
        </div>
    );
}

ShapesLine.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
    onShapeClick: PropTypes.func.isRequired,
    redCount: PropTypes.number.isRequired,
    yellow: PropTypes.number.isRequired,
    greenCount: PropTypes.number.isRequired
};

export default ShapesLine;
