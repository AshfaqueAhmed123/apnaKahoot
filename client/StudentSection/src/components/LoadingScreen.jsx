import React from 'react'
import "./Loader.css"

const LoadingScreen = ({ loadingText }) => {
  return (
    <>
      <div className='absolute top-0 left-0 w-screen h-screen z-[100] bg-black opacity-70'></div>
      <div className='absolute loadingScreen top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[110] min-w-40 min-h-40 w-max h-max flex items-center justify-center flex-col'>
        <div style={{ animationName: "spin", animationIterationCount: "infinite", animationDelay: "100", animationTimingFunction: "ease-out", animationDirection: "initial", animationDuration: ".45s" }} className="loader w-20 h-20 bg-transparent rounded-full border-[15px] border-white border-b-transparent border-r-transparent rotate-45"></div>
        <h1 className='loadingTip mt-5 sm:text-4xl text-xl capitalize  font-bold text-white'>{loadingText}</h1>
      </div>
    </>
  )
}

export default LoadingScreen