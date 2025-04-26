import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectSection'
import AiChat from './components/AiChat'

function App() {
  return (
      <>
        <HeroSection />
        <ProjectsSection />
        <AiChat />
      </>
    );
  }

export default App
