import React, { useContext } from 'react'
import { ModeContext } from '../context/ModeContext'

const Header = () => {

  const {isDark}= useContext(ModeContext)
  
  return (
    <div className='header' 
         style={{backgroundColor:isDark?"black":"skyblue",
                 color: isDark?"white":"black"
    }}>
      <h1>스마트인재개발원</h1>
    </div>
  )
}

export default Header
