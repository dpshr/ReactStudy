import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

  const handleLogout = () =>{
    sessionStorage.clear()
    window.location.reload()
  }


  return (
    <div className='header-container'>
      <div className='link-container'>
        <Link to="/">Son Heung-Min</Link>
      </div>
      <div className='link-container'>
        <Link to="/list">LIST</Link>
        <Link to="https://github.com/dpshr">github</Link>
      </div>
      <div className='link-container'>
        {JSON.parse(sessionStorage.getItem('user'))
        ?<span onClick={handleLogout}>로그아웃</span>
        :<Link to="/login">로그인</Link>}
      </div>
    </div>
  )
}

export default Header
