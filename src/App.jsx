import { useState } from 'react'
import { Header } from './components/Header'
import { MoonIcon } from './components/icons/MoonIcon'
import { SunIcon } from './components/icons/SunIcon'
import { Container } from './components/Container'
import { PresentationSection } from './components/PresentationSection'
import { WorkSection } from './components/WorkSection'
import { SkillsSection } from './components/SkillsSection'
import { ResumeSection } from './components/ResumeSection'
import { ContactForm } from './components/ContactForm'

function App () {
  const [darkTheme, setDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <main className='flex flex-col items-center bg-gradient-to-l from-white to-gray-300 text-gray-900 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700 dark:text-white'>
        <button onClick={toggleTheme} className='fixed right-10 bottom-10 z-10 rounded-full p-3 bg-slate-800 text-gray-100 dark:text-yellow-400 dark:bg-gray-100'>{darkTheme ? <SunIcon /> : <MoonIcon />}</button>
        <Container>
          <Header />
          <PresentationSection />
        </Container>
        <WorkSection />
        <Container>
          <SkillsSection />
          <ResumeSection />
          <section id='contact' className='mt-16'>
            <h2 className='sectionTitle'>Contact</h2>
            <div className='mt-16 flex flex-col items-center w-full'>
              <ContactForm />
            </div>
          </section>
        </Container>
      </main>
    </div>
  )
}

export default App
