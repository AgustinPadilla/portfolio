import React from 'react'

export const NavItem = ({ children, href }) => {
  return (
    <a href={href || '#'} className='flex items-center px-6 py-4 font-bold font-logo text-2xl hover:border-b-2 hover:border-gray-950 dark:hover:border-gray-100'>
      <span className='md:hidden bg-gold w-2 h-2 rounded-full mr-2 mt-1' />{children}
    </a>
  )
}
