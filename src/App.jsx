import './App.css'
import Hero from './assets/components/Hero'
import Card from './assets/components/Card'
import Marquee from './assets/components/Marquee'
import Form from './assets/components/Form'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Hero/>
      <Card/>
      <Marquee/>
      <Form/>
    </>
  )
}

export default App

