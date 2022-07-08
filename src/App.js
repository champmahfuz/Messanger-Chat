import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Contact from './Pages/Home/Contact/Contact';
import SpeechToText from './Pages/Home/SpeechToText/SpeechToText';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speach" element={<SpeechToText />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
