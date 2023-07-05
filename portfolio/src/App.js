import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Body from './Body'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Body />
    </BrowserRouter>
  );
}

export default App;
