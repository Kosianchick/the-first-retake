import PropTypes from 'prop-types';
import './StatsBar.css';

function StatsBar({ toggleDirection, stats }) {
  return (
    <div>
      <button style={{background: 'black', color: 'white', marginBottom: '15px'}} onClick={toggleDirection}>Перемкнути орієнтацію</button>
      <div className='StatsCount'>
        <p style={{color: 'red', fontWeight: 'bold', marginLeft: '20px'}}>Червоний квадрат: {stats.red}</p>
        <p style={{color: 'yellow', fontWeight: 'bold'}}>Жовте коло: {stats.blue}</p>
        <p style={{color: 'green', fontWeight: 'bold'}}>Зелений трикутник: {stats.green}</p>
      </div>
    </div>
  );
}

StatsBar.propTypes = {
  toggleDirection: PropTypes.func.isRequired,
  stats: PropTypes.exact({
    red: PropTypes.number,
    blue: PropTypes.number,
    green: PropTypes.number
  }).isRequired
};

export default StatsBar;
