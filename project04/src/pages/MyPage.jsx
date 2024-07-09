import React from 'react'
import { useLocation } from 'react-router-dom'

const MyPage = () => {


const loc = useLocation()
console.log(loc.state.id)

  return (
    <div>
        {loc.state.id && <p>{loc.state.id}님의 마이페이지</p>}
    </div>
  )
}

export default MyPage
