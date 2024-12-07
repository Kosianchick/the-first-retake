import PropTypes from 'prop-types'; 
import Shape from './Shape';
import './ShapesLine.css';

function ShapesLine({ direction }) {
    const containerClass = direction === 'vertical' ? 'shapes-line vertical' : 'shapes-line horizontal';

    return (
        <div className={containerClass}>
            <Shape tfrColor="red" tfrType="circle" />
            <Shape tfrColor="yellow" tfrType="circle" />
            <Shape tfrColor="green" tfrType="circle" />
        </div>
    );
}

ShapesLine.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired  
};

export default ShapesLine;