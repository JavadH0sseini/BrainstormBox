import React from 'react'

export default function SingleProject({title, description}) {
  return (
    <div className='font-outfit py-5 px-10 flex flex-col gap-2 bg-orange-200 rounded'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <p className='font-medium text-lg'>{description}</p>
    </div>
  )
}
