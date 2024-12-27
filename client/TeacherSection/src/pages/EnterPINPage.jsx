import React from 'react'
import bgImage from "../assets/bg.webp"
import kahootLogo from "../assets/logo.svg"
import langImg from "../assets/lang.png"

const EnterPINPage = () => {
  return (
    <div
      className='w-100 h-screen overflow-hidden flex items-center justify-center'
      style={{
        backgroundImage: `url(${bgImage})`, 
        fontFamily: '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, "Bai Jamjuree", sans-serif' 
      }}
    >
        <div className='w-1/3 flex flex-col items-center justify-center p-4'>
            <img src={kahootLogo} alt="kahoot" className='w-48 mb-10' />
            <div className='w-72 h-36 bg-white rounded-md p-3 flex flex-col items-center justify-center'>
                <input className='w-full h-12 text-center font-bold rounded-md text-[#2f2f2f] border-2 border-gray-500' type="text" placeholder='Game PIN' />
                <button className='bg-[#2f2f2f] text-white w-full h-12 mt-3 rounded-md transition-all'>Enter</button>
            </div>
        </div>
    </div>
  )
}

export default EnterPINPage
