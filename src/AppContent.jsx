import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Layout from './Layout';
import { ShapesLineContext } from './ShapesLineProvider';

function AppContent() {
    const { shapes, incrementClicks } = useContext(ShapesLineContext);
  
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horizontal" element={<Layout direction="horizontal" stats={shapes} onShapeClick={incrementClicks} />} />
        <Route path="/vertical" element={<Layout direction="vertical" stats={shapes} onShapeClick={incrementClicks} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }

export default AppContent;
