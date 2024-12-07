import PropTypes from 'prop-types';
import StatsBar from './StatsBar';
import ShapesLine from './ShapesLine';
import { useContext } from 'react';
import { ShapesLineContext } from './ShapesLineProvider';

function Layout({ direction }) {
  const { shapes, incrementClicks } = useContext(ShapesLineContext);

  const stats = shapes.reduce((acc, shape) => {
    const typeKey = shape.type.toLowerCase(); 
    acc[typeKey] = (acc[typeKey] || 0) + shape.clicks;
    return acc;
  }, { circle: 0, star: 0, triangle: 0 });

  return (
    <div>
      <StatsBar stats={stats} />
      <ShapesLine direction={direction} onShapeClick={incrementClicks} stats={shapes} />
    </div>
  );
}

Layout.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']).isRequired
};

export default Layout;
