import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './Shape.css';

function Shape({ tfrColor = 'red', tfrType = 'circle', onClick, count }) {
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        onClick(); 
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000); 
    };

    return (
        <motion.div
            className={`shape ${tfrType}`} // Додає клас базовий та специфічний для типу
            style={{ backgroundColor: tfrColor }}
            initial={{ opacity: 1 }}
            animate={{ opacity: animate ? 0.5 : 1 }} 
            transition={{
                duration: 0.2,
                repeat: 1,
                repeatType: "reverse"
            }}
            onClick={handleClick}
        >
            {count}
        </motion.div>
    );
}

Shape.propTypes = {
    tfrColor: PropTypes.string,
    tfrType: PropTypes.oneOf(['circle', 'star', 'triangle']),
    onClick: PropTypes.func,
    count: PropTypes.number
};

export default Shape;
