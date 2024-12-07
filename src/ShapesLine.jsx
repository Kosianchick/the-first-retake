import PropTypes from 'prop-types';
import Shape from './Shape';


function ShapesLine({ direction, onShapeClick, stats }) {
  const containerClass = direction === 'vertical' ? 'shapes-line vertical' : 'shapes-line horizontal';

  return (
    <div className={containerClass}>
      {stats.map((shape, index) => {
       
        const tfrColor = ['red', 'blue', 'green'][index % 3]; 
        const tfrType = ['circle', 'star', 'triangle'][index % 3]; 

        return (
          <Shape
            key={shape.id}
            tfrColor={tfrColor}
            tfrType={tfrType}
            onClick={() => onShapeClick(shape.id)}
            count={shape.clicks}
          />
        );
      })}
    </div>
  );
}

ShapesLine.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  onShapeClick: PropTypes.func.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    color: PropTypes.string,
    clicks: PropTypes.number.isRequired
  })).isRequired
};

export default ShapesLine;
