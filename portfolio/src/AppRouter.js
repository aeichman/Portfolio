import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'
import AppRobotArm from './AppRobotArm';

function AppRouter() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/robotarm" element={<AppRobotArm />} />
        </Routes>
      </Router>
    );
}

export default AppRouter