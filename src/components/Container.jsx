import React from 'react'

export const Container = (props) => {
  return (
    <div className='w-full flex flex-col px-8 lg:w-[900px] h-full min-h-screen' {...props}>
      {props.children}
    </div>
  )
}
