import React from 'react'
import {Outlet} from "react-router-dom"

const BaseLayout = ({children}) => {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default BaseLayout