import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './pages/About';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import TestScores from './pages/TestScores';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/test-scores" element={<TestScores />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

