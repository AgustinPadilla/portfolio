import React from 'react'
import { NavItem } from './NavItem'

export const Header = () => {
  return (
    <header className='flex justify-around lg:justify-between h-32 items-center'>
      <figure>
        <h1 className='text-6xl font-bold font-logo'>AP.</h1>
      </figure>
      <nav>
        <ul className='flex w-auto items-center'>
          <li>
            <NavItem href='#work'>
              Work
            </NavItem>
          </li>
          <li>
            <NavItem>
              Resume
            </NavItem>
          </li>
          <li>
            <NavItem>
              Skills
            </NavItem>
          </li>
          <li>
            <NavItem>
              Social
            </NavItem>
          </li>

        </ul>
      </nav>
    </header>
  )
}
