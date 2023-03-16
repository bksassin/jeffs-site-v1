import logo from './logo.svg';
import './App.css';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#ECA400] shadow-lg px-6 py-3">
        <div className="flex items-center">
          <a href="/"><h1 className="font-bold text-lg cursor-pointer" onClick={handleLogoClick}>JDIA</h1></a>
        </div>
        <div className="flex items-center justify-center lg:w-full">
          <ul className="flex">
            <li className="mr-8">
              <a href="#services" className="text-black hover:text-[#0048EC] transition duration-200 ease-in-out">Services</a>
            </li>
            <li className="mr-8">
              <a href="#work" className="text-black hover:text-[#0048EC] transition duration-200 ease-in-out">Work</a>
            </li>
            <li>
              <a href="#contact" className="text-black hover:text-[#0048EC] transition duration-200 ease-in-out">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <Home />
      <main className="flex-grow pb-16"> {/* Add padding-bottom */}
        <div className="flex justify-center items-center pt-10  services-section" id="services">
          <Services />
        </div>
        <div className="flex justify-center items-center py-20 work-section" id="work">
          <Work />
        </div>
        <div className="flex justify-center items-center pt-20 contact-section" id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
