import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import AppContent from './AppContent';  
import { ShapesLineProvider } from './ShapesLineProvider';


function App() {
    return (
        <ShapesLineProvider>
            <Router>
                <div className="App">
                    <Header />
                    <AppContent />  
                </div>
            </Router>
        </ShapesLineProvider>
    );
}

export default App;
