import React from 'react'
import bgImage from "../assets/bg.webp"

const NotFound = () => {
    return (
        <div className='w-100 h-screen overflow-hidden flex items-center justify-center'
            style={{
                backgroundImage: `url(${bgImage})`,
                fontFamily: '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, "Bai Jamjuree", sans-serif'
            }}>

            <div className='flex items-center justify-center flex-col gap-5'>
                <h1 className='text-6xl text-red-700 font-bold uppercase'>404</h1>
                <p className='uppercase text-xl'>SORRY, PAGE NOT FOUND !</p>

            </div>
        </div>
    )
}

export default NotFound