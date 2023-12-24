import React from 'react'

export const Project = ({ title, description, img, url, children, reverse }) => {
  return (
    <div className='grid grid-cols-2 py-24 border-b-[1px] last:border-b-0 border-gray-300'>
      {
        reverse ||
          <figure className='pr-10'>
            <a href={url}>
              <img className='drop-shadow-xl  object-cover hover:opacity-90 hover:scale-110 transition-transform' src={img} alt='' />
            </a>
          </figure>
      }
      <div className=' h-full flex flex-col justify-center'>
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
      {
        reverse &&
          <figure className='pl-10'>
            <a href={url}>
              <img className='drop-shadow-xl  object-cover hover:opacity-90 hover:scale-110 transition-transform' src={img} alt='' />
            </a>
          </figure>
      }
    </div>
  )
}
