import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'
import Marquee from './components/Marquee'
import Form from './components/Form'
import LocomotiveScroll from 'locomotive-scroll';
import { Analytics } from "@vercel/analytics/react"
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Hero/>
      <Card/>
      <Marquee/>
      <Form/>
      <Analytics/>
    </>
  )
}

export default App

