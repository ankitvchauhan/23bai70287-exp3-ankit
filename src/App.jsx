import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
