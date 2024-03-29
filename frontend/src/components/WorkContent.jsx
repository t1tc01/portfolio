import React from 'react'

const WorkContent = ({srcImage, workTime, workName, workContent}) => {
  return (
    <div className=''>
        <img src={srcImage} alt="Img" className='h-[400px] w-full rounded-xl' />
        <span className='text-[15px]'>{workTime}</span>
        <h3 className='font-semibold mt-3 mb-3 text-[18px]'>{workName}</h3>
        <p>{workContent}</p>
    </div>
  )
}

export default WorkContent