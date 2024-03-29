import React from 'react'
import Title from './Title'


const Contact = () => {
  return (
    <div className='w-[1280px] mb-52'>
        <div className=''>
            <Title title={"contact."} content={"You can contact me through..."}/>
            <div className='flex justify-center mt-32 gap-24'>
                <img src="./assets/Contact/cute-rabbit.png" alt="" className='h-[500px] w-[500px] rounded-xl'/>
                <div className='text-[18px]'>
                    <p className='mb-5 leading-10 text-4xl font-extrabold text-[#03045E]'>Email</p>
                    <div className='text-[#03045E] text-base '>
                        <span>hoangphanvunguyen@mail.com</span><br />
                        <span>hedwig.phan@techvify.com.vn</span><br />
                    </div>
                    <p className='mb-5 leading-10 text-4xl font-extrabold text-[#03045E] mt-9'>Git</p>
                    <div className='text-[#03045E] text-base '>
                        <span>github.com/t1tc01</span><br />
                        <span>gitlab.com/t1tc01</span><br />
                    </div>
                    <p className='mb-5 leading-10 text-4xl font-extrabold text-[#03045E] mt-9'>Linkdin</p>
                    <div className='text-[#03045E] text-base '>
                        <span>linkedin.com/in/t1tc01/</span><br />
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Contact