import React, { useContext } from 'react'
import { ModeContext } from '../context/ModeContext'

const Main = () => {
  const {isDark}= useContext(ModeContext)
  return (
    <div className='content'
         style={{backgroundColor: isDark?"black":"white",
                color: isDark?"white":"black"
         }}>
      <h1>지각,결석하지 않기~</h1>
    </div>
  )
}

export default Main
