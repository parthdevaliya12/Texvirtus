import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import WhyChooseUs from '../sections/WhyChooseUs'
import Process from '../sections/Process'
import CTA from '../sections/CTA'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
