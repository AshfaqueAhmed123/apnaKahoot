import React from 'react'
import { useParams } from 'react-router-dom'

const Quiz = () => {
  const {id} = useParams()
  return (
    <div>quiz - id = {id}</div>
  )
}

export default Quiz