import React from 'react'

export const Project = ({ title, description, img, url, children }) => {
  return (
    <div className='flex items-center'>
      <figure>
        <a href={url} className='relative'>
          <img className='drop-shadow-xl w-[700px] hover:opacity-90 hover:scale-110 transition-transform' src={img} alt='' />
        </a>
      </figure>
      <div className='h-full flex flex-col justify-center'>
        <h3 className='text-4xl mb-6 font-bold font-sans'>
          {title}
        </h3>
        <p className='text-xl'>
          {description}
        </p>
        <ul className='grid grid-cols-3 gap-3 mt-4'>
          {children}
        </ul>
      </div>
    </div>
  )
}
