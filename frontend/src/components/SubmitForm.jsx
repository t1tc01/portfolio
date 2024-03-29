import React, { useState }  from 'react'
import Title from './Title'
import ContactApi from '../api/Submit' 

const SubmitForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const hanlderSubmit = async (e) => {
    let data = {
      name,
      email,
      message
    }
    try {
      let res = await ContactApi.createSubmit(data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div onSubmit={hanlderSubmit} className='w-[1280px] mb-52'>
      <Title title={"...or give a message for me"} content={"through the form below..."}/>
      <div>
        <form method='POST' className='flex bg-[#F5EE84] flex-col items-center justify-center gap-8 mt-4 p-6 rounded-3xl' action='localhost:3000/api/submit'>
          <div className='flex items-center gap-5'>
            <p className='text-[#03045E] text-2xl' >Your name</p>
            <input type="text" name="username" className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-[#03045E] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder='add your name' onChange={(e) => setName(e.target.value)} value={name}/>
          </div>
          <div className='flex items-center gap-5'>
            <p className='text-[#03045E] text-2xl'>Your email</p>
            <input type="text" name="email" className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-[#03045E] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder='add your email' onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div className='flex items-start gap-10'>
            <p className='text-[#03045E] text-2xl' >Your Message</p>
            <textarea name="message" id="message" cols="30" rows="10" className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-[#03045E] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder='add your message' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
          </div>
          <button className='px-10 py-3 bg-[#474306] rounded-md after:rounded-md after:border-2 after:border-black relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0  after:z-0 hover:after:-translate-x-1.5 hover:after:-translate-y-1.5'>
            <span className='z-10 relative text-[#F5EE84]'>Send it to me ^^</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default SubmitForm