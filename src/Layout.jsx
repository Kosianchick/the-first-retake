import PropTypes from 'prop-types'; 
import StatsBar from './StatsBar';
import ShapesLine from './ShapesLine';

function Layout({ direction, stats, onShapeClick }) {
    return (
        <div>
            <StatsBar stats={stats} />
            <ShapesLine direction={direction} onShapeClick={onShapeClick}
                        redCount={stats.red} yellowCount={stats.blue} greenCount={stats.green} />
        </div>
    );
}


Layout.propTypes = {
    direction: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
    stats: PropTypes.exact({
        red: PropTypes.number,
        blue: PropTypes.number,
        green: PropTypes.number
    }).isRequired,
    onShapeClick: PropTypes.func.isRequired
};

export default Layout;