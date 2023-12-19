import { Container } from './Container'
import React from 'react'
import { ReactIcon } from './icons/ReactIcon'
import { TailwindIcon } from './icons/TailwindIcon'
import { JavascriptIcon } from './icons/JavascriptIcon'

export const WorkSection = () => {
  return (
    <section id='work' className='w-full bg-white dark:text-gray-900 dark:bg-gray-50 flex flex-col items-center h-full shadow-2xl shadow-black'>
      <Container>
        <h2 className='mt-12 text-5xl my-3 font-logo font-bold w-full text-left'>
          Work
        </h2>
        <div className='flex flex-col w-full h-[500px]'>
          <div className='flex items-center'>
            <figure>
              <img className='drop-shadow-xl w-[700px]' src='bookupp.png' alt='' />
            </figure>
            <div className='h-full flex flex-col mt-[120px]'>
              <h3 className='text-4xl mb-6 font-bold font-sans'>
                bookupp!
              </h3>
              <p className='text-xl'>
                Find any book that you want and save it in a read list.
              </p>
              <ul className='grid grid-cols-3 gap-3 mt-4'>
                <li>
                  <a href='' className='flex flex-col items-center'>
                    <ReactIcon w='40px' h='40px' color='#61DBFB' />
                    React
                  </a>
                </li>
                <li>
                  <a href='' className='flex flex-col items-center'>
                    <TailwindIcon w='40px' h='40px' color='#38BDF8' />
                    Tailwind
                  </a>
                </li>
                <li>
                  <a href='' className='flex flex-col items-center'>
                    <JavascriptIcon w='33px' h='40px' color='#38BDF8' />
                    Javascript
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
