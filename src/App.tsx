import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesCards from './components/ServicesCards';
import About from './components/About';
import DetailedServices from './components/DetailedServices';
import Experience from './components/Experience';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesCards />
      <About />
      <DetailedServices />
      <Experience />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
