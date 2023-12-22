import { Container } from './Container'
import React from 'react'
import { ReactIcon } from './icons/ReactIcon'
import { TailwindIcon } from './icons/TailwindIcon'
import { JavascriptIcon } from './icons/JavascriptIcon'
import { Project } from './Project'

export const WorkSection = () => {
  return (
    <section id='work' className='w-full bg-white dark:text-gray-900 dark:bg-gray-50 flex flex-col items-center h-full shadow-2xl shadow-black'>
      <Container>
        <h2 className='mt-12 text-5xl my-3 font-logo font-bold w-full text-left'>
          Work
        </h2>
        <div className='flex flex-col w-full min-h-[500px]'>
          <Project title='BookUpp!' img='bookupp.png' url='https://bookupp.netlify.app/' description='Find any book that you want and save it on a readlist'>
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
          </Project>
        </div>
      </Container>
    </section>
  )
}
