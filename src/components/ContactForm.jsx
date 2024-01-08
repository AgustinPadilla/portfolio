import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const ContactForm = () => {
  const form = useRef()
  const [sendOk, setSendOk] = useState()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_bld8axe', 'template_s2l47xs', form.current, 'gISz54D8KD6AZUaaA').then((result) => {
      if (result.status === 200) {
        setSendOk(true)
      } else {
        setSendOk(false)
      }
    })
  }
  return (
    <form className='font-sans font-semibold text-xl w-full max-w-[600px] flex flex-col gap-6' ref={form} onSubmit={sendEmail}>
      <div className='flex flex-col'>
        <label>Name</label>
        <input className='mt-2 border-gray-600 border-2 dark:border-0 font-normal rounded h-10 text-gray-900 p-3 placeholder:text-gray-500' type='text' name='from_name' placeholder='Full name' required />
      </div>
      <div className='flex flex-col'>
        <label>Email</label>
        <input className='mt-2 border-gray-600 border-2 dark:border-0 font-normal rounded h-10 text-gray-900 p-3 placeholder:text-gray-500' type='email' name='reply_to' placeholder='name@email.com' required />
      </div>
      <div className='flex flex-col'>
        <label>Message</label>
        <textarea className='mt-2 border-gray-600 border-2 dark:border-0 font-normal rounded h-32 text-gray-900 p-3 placeholder:text-gray-500' name='message' placeholder='Leave a message...' required />
      </div>
      <input type='submit' value='Send' className='font-sans border-2 border-gray-900 py-2 px-8 active:bg-gray-900 active:text-white dark:border-gray-100 dark:active:bg-gray-100 dark:active:text-gray-900 cursor-pointer' />
      {
        sendOk !== undefined &&
          <div>
            {
              sendOk
                ? <p className='text-md text-white bg-green-600 rounded p-2 opacity-90 mb-6'>Mail sent succesfully!</p>
                : <p className='text-md text-white bg-red-600 rounded p-2 opacity-90 mb-6'>Error</p>

            }
          </div>
      }
    </form>
  )
}
