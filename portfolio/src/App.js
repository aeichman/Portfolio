import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'
import About from './About';
import Proj from './Projects-home';
import './App.css';
import Skills from './Skills';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Proj />
    </BrowserRouter>
  );
}

export default App;
