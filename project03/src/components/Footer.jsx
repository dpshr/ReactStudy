import React,{ useContext } from 'react'
import { ModeContext } from '../context/ModeContext'

const Footer = () => {
  const {isDark,setIsDark}= useContext(ModeContext)
  return (
    <div className='footer'
          style={{backgroundColor:isDark?'black':'whitesmoke',
                  color: isDark?'white':'black'
          }}>
      <button className='button' onClick={()=>{setIsDark(!isDark)}}>{isDark?"Light":"Dark"} Mode</button>
    </div>
  )
}

export default Footer