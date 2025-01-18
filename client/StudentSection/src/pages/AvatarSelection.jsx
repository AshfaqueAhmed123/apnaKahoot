import React from 'react'
import bgImage from "../assets/bg.webp"

const AvatarSelection = () => {
  return (
    <div className='w-100 h-screen overflow-hidden flex items-center justify-center'
      style={{
        backgroundImage: `url(${bgImage})`,
        fontFamily: '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, "Bai Jamjuree", sans-serif'
      }}>

        <div className="container bg-white w-[60%] h-[50%] rounded-2xl p-2">
          avatars
        </div>

    </div>
  )
}

export default AvatarSelection