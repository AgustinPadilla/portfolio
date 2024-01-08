import React from 'react'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { GithubIcon } from './icons/GithubIcon'

export const PresentationSection = () => {
  return (
    <section className='text-xl font-logo flex-grow font-bold mt-10 mb-10 md:mt-0 md:mb-0 flex flex-col-reverse items-center md:flex-row min-h-max md:justify-between'>
      <div className='w-96 text-center md:text-left'>
        <span className='font-normal'>Hi! I'm</span>
        <h1 className='text-5xl my-3'>Agustín Padilla</h1>
        <h2 className='text-4xl mb-8 text-gold'>Frontend developer</h2>
        <p className='font-normal mb-2'>With experience in DevOps, now looking for new challenges in the development area.</p>
        <div className='flex gap-5 font-sans mt-10 mb-10 items-center flex-col md:flex-row'>
          <a className='flex items-center' href='https://www.linkedin.com/in/agustin-padilla-353038191/'>
            <LinkedinIcon w='30px' h='30px' color='#0077B5' />
            <span className='text-lg'>Linkedin</span>
          </a>
          <a className='flex items-center' href='https://github.com/AgustinPadilla'>
            <GithubIcon w='30px' h='30px' color='currentColor' />
            <span className='text-lg'>GitHub</span>
          </a>
        </div>
        <a href='#aboutMe' className='font-sans border-2 border-gray-900 py-2 px-8 active:bg-gray-900 active:text-white dark:border-gray-100 dark:active:bg-gray-100 dark:active:text-gray-900'>
          Learn more
        </a>
      </div>
      <figure>
        <img src='Foto.png' className='w-64 md:w-96' alt='foto de frente Agustin Padilla' />
      </figure>
    </section>
  )
}
