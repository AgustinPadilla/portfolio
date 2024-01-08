import React from 'react'
import { APIcon } from './icons/APIcon'

export const ResumeSection = () => {
  return (
    <section id='aboutMe' className='mt-16'>
      <h2 className='sectionTitle'>About me</h2>
      <div className='flex mt-16 gap-10 font-sans items-center'>
        <figure className='w-[300px] flex flex-col items-center font-logo bg-gold rounded-2xl p-4 text-white shadow-2xl'>
          <APIcon w='200px' />
          <h1 className='text-[23px]'>AGUSTIN PADILLA</h1>
          <h2>Developer</h2>
        </figure>
        <div className='w-[500px]'>
          <p className='text-lg'>
            I am a DevOps Technician.
            I have worked in the
            application management
            reviews for large clients.
          </p>
          <p className='text-lg mt-4'>
            I am currently exploring
            development while studying
            Technology Analyst
            Information at the University
            ORT.
          </p>
          <p className='text-lg mt-4'>
            I have solid knowledge of
            Frontend programming with
            HTML, CSS and Javascript,
            including the use of React.
            I also have skills
            basics in Backend development
            with experience in NodeJs and management
            SQL databases.
          </p>
        </div>
      </div>
    </section>
  )
}
