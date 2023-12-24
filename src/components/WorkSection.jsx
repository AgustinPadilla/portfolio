import { Container } from './Container'
import React from 'react'
import { ReactIcon } from './icons/ReactIcon'
import { TailwindIcon } from './icons/TailwindIcon'
import { JavascriptIcon } from './icons/JavascriptIcon'
import { CssIcon } from './icons/CssIcon'
import { Project } from './Project'
import { HtmlIcon } from './icons/HtmlIcon'

export const WorkSection = () => {
  return (
    <section id='work' className='w-full bg-white dark:text-gray-900 dark:bg-gray-50 flex flex-col items-center h-full shadow-xl dark:shadow-gray-950'>
      <Container>
        <h2 className='sectionTitle'>
          Work
        </h2>
        <div className='flex flex-col w-full min-h-[500px]'>
          <Project title='BookUpp!' img='bookupp.png' url='https://bookupp.netlify.app/' description='Find any book that you want and save it on a readlist'>
            <li>
              <div href='' className='flex flex-col items-center'>
                <ReactIcon w='40px' h='40px' />
                React
              </div>
            </li>
            <li>
              <div href='' className='flex flex-col items-center'>
                <TailwindIcon w='40px' h='40px' />
                Tailwind
              </div>
            </li>
            <li>
              <div href='' className='flex flex-col items-center'>
                <JavascriptIcon w='33px' h='40px' />
                Javascript
              </div>
            </li>
          </Project>
          <Project title='Uniformas' img='uniformas.png' reverse url='https://uniformasuy.netlify.app/' description='landing page for a company dedicated to the manufacturing of school uniforms'>
            <li>
              <div href='' className='flex flex-col items-center'>
                <ReactIcon w='40px' h='40px' />
                React
              </div>
            </li>
            <li>
              <div href='' className='flex flex-col items-center'>
                <TailwindIcon w='40px' h='40px' />
                Tailwind
              </div>
            </li>
            <li>
              <div href='' className='flex flex-col items-center'>
                <JavascriptIcon w='33px' h='40px' />
                Javascript
              </div>
            </li>
          </Project>
          <Project title='Spot 17' img='spot17.png' url='https://spot17.netlify.app/' description='landing page for a streetwear online shop'>
            <li>
              <div href='' className='flex flex-col items-center'>
                <CssIcon w='40px' h='40px' />
                CSS
              </div>
            </li>
            <li>
              <div href='' className='flex flex-col items-center'>

                <HtmlIcon w='40px' h='40px' />
                HTML
              </div>
            </li>
          </Project>
        </div>
      </Container>
    </section>
  )
}
