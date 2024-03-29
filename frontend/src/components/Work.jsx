import React from 'react'
import Title from './Title'
import WorkContent from './WorkContent'

const Work = () => {
  return (
    <div id="mywork" className='w-[1280px] mb-52'>
        <Title 
            title={"work."}
            content={"and something interesting I was made... "}
        />
        <div className='flex justify-center mt-32 gap-32 text-[#03045E]'>
            <WorkContent srcImage={"./assets/Work/Work1.png"} workTime={"Febuary, 2023"} workName={"relative-distance-depthnet-yolov5"} workContent={"Github: https://github.com/t1tc01/relative-distance-depthnet-yolov5"}/>
            <WorkContent srcImage={"./assets/Work/Work2.png"} workTime={"December, 2023"} workName={"AnyFace"} workContent={"Github: https://github.com/VinhASOKEN/AnyFace"}/>
        </div>
    </div>
  )
}

export default Work