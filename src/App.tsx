
import Nav from './component/nav'
import TechStacks from './component/TechStacks'
import About from './pages/Aboute'
import Intro from './pages/Intro'
function App() {
  return (
    <main className='w-full '>
      <Nav />
      <Intro />
      <TechStacks />
      <About/>
    </main>
  )
}

export default App
