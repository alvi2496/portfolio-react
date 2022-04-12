import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Stat from './components/Stat';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Service />
      <Stat />
      <Contact />
      <Footer />

      <div id="preloader"> 
        <div id="loader"></div>
      </div> 
    </div>
  );
}

export default App;
