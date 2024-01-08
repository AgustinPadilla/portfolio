import React, { useState } from 'react'
import { NavItem } from './NavItem'
import { APIcon } from './icons/APIcon'
import { MenuIcon } from './icons/MenuIcon'
import { CloseIcon } from './icons/CloseIcon'

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  return (
    <header className='flex mt-3 md:mt-10 flex-col md:flex-row justify-around lg:justify-between min-h-32 items-center'>
      <figure className='w-full md:w-auto'>
        <APIcon w='80px' h='80px' />
      </figure>
      <nav className='hidden md:block'>
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
      <nav className='md:hidden mt-2 ' hidden={!navOpen}>
        <ul className='flex flex-col' onClick={toggleNav}>
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
      <button className='absolute top-8 right-10 md:hidden' onClick={toggleNav}>
        {navOpen ? <CloseIcon w='30px' /> : <MenuIcon w='30px' />}
      </button>
    </header>
  )
}
