import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShapesLineContext } from './ShapesLineProvider';

function StatsBar({ stats }) {
  const { resetClicks } = useContext(ShapesLineContext); 

  return (
    <div className='StatsCount'>
      <p style={{color: 'red', fontWeight: 'bold'}}>Червоне коло: {stats.red}</p>
      <p style={{color: 'blue', fontWeight: 'bold'}}>Синя зірка: {stats.blue}</p>
      <p style={{color: 'green', fontWeight: 'bold'}}>Зелений трикутник: {stats.green}</p>
      <button onClick={resetClicks}>Очистити кліки</button>
    </div>
  );
}



StatsBar.propTypes = {
  stats: PropTypes.exact({
    red: PropTypes.number,
    blue: PropTypes.number,
    green: PropTypes.number
  }).isRequired
};


export default StatsBar;
