import React from 'react'

export const Container = (props) => {
  return (
    <div className='sm:w-full px-8 lg:w-[900px] h-full' {...props}>
      {props.children}
    </div>
  )
}
