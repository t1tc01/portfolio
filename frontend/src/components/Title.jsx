import React from 'react'


const Title = ({title, content}) => {
  return (
    <div>
        <h2 className='text-[#03045E] text-6xl font-extrabold mb-8'>{title}</h2>
        <p className='w-3/4 text-2xl text-[#03045E]'>{content}</p>
    </div>
  )
}

export default Title