import PropTypes from 'prop-types';
import './Shape.css';

function Shape({ tfrColor = 'red', tfrType = 'circle', onClick, count }) {
    return (
        <div
            className={`shape ${tfrType}`} 
            style={{ backgroundColor: tfrColor }}
            onClick={onClick}
            
        >
            {count}
        </div>
    );
}

Shape.propTypes = {
    tfrColor: PropTypes.string,
    tfrType: PropTypes.oneOf(['retangle', 'circle', 'triangle']),
    onClick: PropTypes.func,
    count: PropTypes.number
};

export default Shape;