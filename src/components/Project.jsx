import React from 'react'
import { GithubIcon } from './icons/GithubIcon'
import { LinkIcon } from './icons/LinkIcon'

export const Project = ({ title, description, img, url, children, reverse, github }) => {
  return (
    <div className={`flex text-center md:text-left md:grid md:grid-cols-2 py-24 border-b-[1px] last:border-b-0 border-gray-800 dark:border-gray-300 ${reverse ? 'flex-col-reverse' : 'flex-col'}`}>
      {
        reverse ||
          <figure className='md:pr-10'>
            <a href={url}>
              <img className='drop-shadow-xl w-full object-cover hover:opacity-90 hover:scale-110 transition-transform' src={img} alt='' />
            </a>
          </figure>
      }
      <div className='mt-10 md:mt-0 h-full flex flex-col gap-4 items-center justify-center'>
        <h3 className='text-4xl mb-6 font-bold font-sans w-full'>
          {title}
        </h3>
        <p className='text-xl w-full'>
          {description}
        </p>
        <ul className='w-4/5 grid grid-cols-3 gap-3 mt-4'>
          {children}
        </ul>
        <div className='grid grid-cols-2 gap-10'>
          <a className='cursor-pointer mt-6 gap-3 flex items-center border-2 w-fit dark:border-gray-900 py-1 px-4 dark:active:bg-gray-900 dark:active:text-white border-gray-100 active:bg-gray-100 active:text-gray-900' href={url}>
            <LinkIcon w='30px' h='30px' color='currentColor' />
            <span className='text-md font-semibold'>Website</span>
          </a>
          <a className='cursor-pointer mt-6 gap-3 flex items-center border-2 w-fit dark:border-gray-900 py-1 px-4 dark:active:bg-gray-900 dark:active:text-white border-gray-100 active:bg-gray-100 active:text-gray-900' href={github}>
            <GithubIcon w='30px' h='30px' color='currentColor' />
            <span className='text-md font-semibold'>GitHub</span>
          </a>
        </div>
      </div>
      {
        reverse &&
          <figure className='md:pl-10'>
            <a href={url}>
              <img className='drop-shadow-xl w-full object-cover hover:opacity-90 hover:scale-110 transition-transform' src={img} alt='' />
            </a>
          </figure>
      }
    </div>
  )
}
