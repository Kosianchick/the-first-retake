import ShapesLine from './ShapesLine';
import './App.css';

function App() {
    return (
        <div>
            <h1 className='Hor'>Horizontal Line</h1>
            <ShapesLine direction="horizontal" /> 
            <h1 className='Ver'>Vertical Line</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ShapesLine direction="vertical" /> 
            </div>
        </div>
    );
}

export default App;
