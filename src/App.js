import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

import NavigationBar from './Components/NavigationBar'
import MainLogo from './Components/MainLogo'
import IntroSection from './Components/IntroSection'
import AboutUs from './Components/AboutUs'
import Services from './Components/Sevices'
import WhyUs from './Components/WhyUs'
import Portfolio from './Components/Portfolio'
import Testimonials from './Components/Testimonials'
import TeamSection from './Components/TeamSection'
import ClientSection from './Components/ClientSection'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
     
      <header id="header" className="fixed-top">
      
        <div className="container">
          <MainLogo />
        
          <NavigationBar />
        </div>
      
      </header>
    
      <IntroSection />

      <main id="main"></main>

      <AboutUs/>

      <Services/>

      <WhyUs/>

      <Portfolio/>

      <Testimonials />

      <TeamSection />

      <ClientSection/>

      <ContactSection/>
      
      <Footer />
    </div>
  );
}

export default App;
