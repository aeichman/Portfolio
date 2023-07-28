import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'
import AppRobotArm from './AppRobotArm';
import AppDubCal from './AppDubCal';

function AppRouter() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/robotarm" element={<AppRobotArm />} />
          <Route path="/dubcalendar" element={<AppDubCal />} />
        </Routes>
      </Router>
    );
}

export default AppRouter