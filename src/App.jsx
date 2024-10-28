import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import ContentBox from './components/ContentBox';
import Feedback from './components/Feedback';
import VisionAndMission from './components/VisionAndMission';
import Students from './components/Students';
import Syllabus from './components/Syllabus';
import Timetable from './components/Timetable';
import ContactUs from './components/ContactUs';
import Disclaimer from './components/Disclaimer';
import PoPsoPeo from './components/PoPsoPeo';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Logo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/vision-mission" element={<VisionAndMission />} />
        <Route path="/students" element={<Students />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/po" element={<PoPsoPeo/>} />
      </Routes>
    </Router>
  );
}

export default App;
