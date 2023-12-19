import React from 'react'

export const NavItem = ({ children, href }) => {
  return (
    <a href={href || '#'} className='px-6 py-4 font-bold font-logo text-2xl hover:border-b-2 hover:border-gray-950 dark:hover:border-gray-100'>
      {children}
    </a>
  )
}
