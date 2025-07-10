import { useState } from 'react'
import Nav from './component/nav'
import Intro from './pages/Intro'
function App() {
  return (
    <main className=' w-full h-screen '>
      <Nav/>
      <Intro/>
    </main>
  )
}

export default App
