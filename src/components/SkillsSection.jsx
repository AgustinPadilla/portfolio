import React from 'react'
import { ReactIcon } from './icons/ReactIcon'
import { TailwindIcon } from './icons/TailwindIcon'
import { JavascriptIcon } from './icons/JavascriptIcon'
import { NodeIcon } from './icons/NodeIcon'
import { CssIcon } from './icons/CssIcon'
import { HtmlIcon } from './icons/HtmlIcon'
import { BootstrapIcon } from './icons/BootstrapIcon'

export const SkillsSection = () => {
  return (
    <section id='skills'>
      <h2 className='sectionTitle'>Skills</h2>
      <div className='font-semibold flex-wrap pt-10 pb-10 flex gap-10 justify-center'>
        <div className='h-full flex flex-col items-center'>
          <ReactIcon h='75px' />
          <h2>React</h2>
        </div>
        <div className='h-full flex flex-col items-center'>
          <TailwindIcon h='75px' />
          <h2>Tailwind</h2>
        </div>
        <div className='h-full flex flex-col items-center'>
          <JavascriptIcon h='75px' />
          <h2>JavaScript</h2>
        </div>
        <div className='h-full flex flex-col items-center'>
          <NodeIcon h='75px' />
          <h2>NodeJS</h2>
        </div>
        <div className='h-full flex flex-col items-center'>
          <CssIcon h='75px' />
          <h2>CSS</h2>
        </div>
        <div className='h-full flex flex-col items-center'>
          <HtmlIcon h='75px' />
          <h2>HTML</h2>
        </div>
        <div className='h-full flex flex-col items-center'>
          <BootstrapIcon h='75px' />
          <h2>Bootstrap</h2>
        </div>
      </div>
    </section>
  )
}
