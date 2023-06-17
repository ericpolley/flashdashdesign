
import {HashRouter as Router, Route, Routes, } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blog001 from "./pages/Blogs/Blog001";

import SoftwarePortfolio from './pages/SoftwarePortfolio';
import GamePortfolio from './pages/GamePortfolio';
import AnimationPortfolio from './pages/AnimationPortfolio';
import Tutorials from './pages/Tutorials';
import Footer from './components/Footer';
import Graphics from './pages/graphics';



function App() {
  
  return (
    <>
    <Router>
      <Header />
      <div className='w-full flex justify-center cursor-default'>
      <div className='border-8 border-t-4 bg-orange-300 border-orange-500 w-[95vw] sm:w-[90vw] rounded-xl p-3 text-center cursor-default'>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/blog" element={<Blog />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/software" element={<SoftwarePortfolio />} />
    <Route exact path="/portfolio" element={<SoftwarePortfolio />} />
    <Route exact path="/game" element={<GamePortfolio />} />
    <Route exact path="/animation" element={<AnimationPortfolio />} />
    <Route exact path="/graphics" element={<Graphics />} />
    <Route exact path="/tutorials" element={<Tutorials />} />
    <Route exact path="/blog/001" element={<Blog001 />} />
   
    </Routes>
    </div>
    </div>
    <Footer />
    </Router>

    
    
    </>
  );
}

export default App;
