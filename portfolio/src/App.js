import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'
import About from './About';
import './App.css';
import Skills from './Skills';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <About />
      <Skills />
    </BrowserRouter>
  );
}

export default App;
