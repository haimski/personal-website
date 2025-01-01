import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { Navbar, Footer } from './generic-components';
import './App.scss'

function App() {

  return (
      <>
          <Navbar />
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </Router>
          <Footer />
      </>
  )
}

export default App
