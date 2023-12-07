import { useState } from 'react'
import { Header } from './components/Header'
import { MoonIcon } from './components/icons/MoonIcon'
import { SunIcon } from './components/icons/SunIcon'

function App () {
  const [darkTheme, setDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <section className='flex flex-col items-center h-screen bg-gradient-to-l from-white to-gray-300 text-gray-900 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700 dark:text-gray-100'>
        <button onClick={toggleTheme} className='fixed right-10 bottom-10 rounded-full p-3 bg-slate-800 text-gray-100 dark:text-yellow-400 dark:bg-gray-100'>{darkTheme ? <SunIcon /> : <MoonIcon />}</button>
        <div className='sm:w-full lg:w-[900px] h-full'>
          <Header />
          <section className='text-xl font-logo font-bold mt-32'>
            <div className='w-96'>
              <span className='font-normal'>Hi! I'm</span>
              <h1 className='text-5xl my-3'>Agustín Padilla</h1>
              <h2 className='text-4xl mb-8'>Frontend developer</h2>
              <p className='font-normal mb-10'>With experience in DevOps, now looking for new challenges in the development area.</p>
              <a href='#' className='font-sans border-2 border-gray-900 py-2 px-8 active:bg-gray-900 active:text-white dark:border-gray-100 dark:active:bg-gray-100 dark:active:text-gray-900'>Learn more</a>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default App
