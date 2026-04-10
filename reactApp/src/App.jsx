import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FunFactCard from './FunFactCard'

function App() {
  return (
    <>
    <FunFactCard fact="I have visited China 8 times. Yunnan Province is my favorite!" />
    <FunFactCard fact="Agentic engineering peaks my curiosity!" />
    <FunFactCard fact="I like Taiwanese food" />
    <FunFactCard fact="When I was a kid, one of my favorite games was the first Civilization game." />
    <FunFactCard fact="I have two tuxedo cats, named Timmy and Tommy." />
    </>
  )
}

export default App