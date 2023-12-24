import { useState } from 'react'
import { Header } from './components/Header'
import { MoonIcon } from './components/icons/MoonIcon'
import { SunIcon } from './components/icons/SunIcon'
import { Container } from './components/Container'
import { PresentationSection } from './components/PresentationSection'
import { WorkSection } from './components/WorkSection'
import { ReactIcon } from './components/icons/ReactIcon'
import { TailwindIcon } from './components/icons/TailwindIcon'
import { JavascriptIcon } from './components/icons/JavascriptIcon'
import { CssIcon } from './components/icons/CssIcon'
import { HtmlIcon } from './components/icons/HtmlIcon'
import { NodeIcon } from './components/icons/NodeIcon'

function App () {
  const [darkTheme, setDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <section className='flex flex-col items-center bg-gradient-to-l from-white to-gray-300 text-gray-900 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700 dark:text-white'>
        <button onClick={toggleTheme} className='fixed right-10 bottom-10 rounded-full p-3 bg-slate-800 text-gray-100 dark:text-yellow-400 dark:bg-gray-100'>{darkTheme ? <SunIcon /> : <MoonIcon />}</button>
        <Container>
          <Header />
          <PresentationSection />
        </Container>
        <WorkSection />
        <Container>
          <section id='skills'>
            <h2 className='sectionTitle'>Skills</h2>
            <div className='h-64 flex gap-10'>
              <ReactIcon />
              <TailwindIcon />
              <JavascriptIcon />
              <NodeIcon />
              <CssIcon />
              <HtmlIcon />
            </div>
          </section>
        </Container>
      </section>
    </div>
  )
}

export default App
