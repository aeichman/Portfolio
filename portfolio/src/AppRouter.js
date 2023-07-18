import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'
import Robotarm from './Robotarm';

function AppRouter() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/robotarm" element={<Robotarm />} />
        </Routes>
      </Router>
    );
}

export default AppRouter