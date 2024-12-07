import PropTypes from 'prop-types';
import './Shape.css';

function Shape({ tfrColor = 'red', tfrType = 'circle' }) {
    return (
        <div
            className={`shape ${tfrType}`} 
            style={{ backgroundColor: tfrColor }}
        ></div>
    );
}

Shape.propTypes = {
    tfrColor: PropTypes.string,
    tfrType: PropTypes.oneOf(['circle']),
};

export default Shape;