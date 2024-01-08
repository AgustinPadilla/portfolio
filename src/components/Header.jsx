import React from 'react'
import { NavItem } from './NavItem'
import { APIcon } from './icons/APIcon'

export const Header = () => {
  return (
    <header className='flex justify-around lg:justify-between h-32 items-center'>
      <figure>
        <APIcon w='80px' />
      </figure>
      <nav>
        <ul className='flex w-auto items-center'>
          <li>
            <NavItem href='#work'>
              Work
            </NavItem>
          </li>
          <li>
            <NavItem href='#skills'>
              Skills
            </NavItem>
          </li>
          <li>
            <NavItem href='#aboutMe'>
              About me
            </NavItem>
          </li>
          <li>
            <NavItem href='#contact'>
              Contact
            </NavItem>
          </li>

        </ul>
      </nav>
    </header>
  )
}
