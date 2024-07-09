import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    /* useNavigate : 페이지 이동을 도와주는 기능
        1. useNavigate를 호출해서 상수안에 담아준다. 
        2. 페이지 이동해야할 때 상수이름("경로")
            ex)nav('/mypage')
        3. 페이지 간 데이터 전달이 가능
            상수이름("경로", {state : {키:값,키:값....}})
            ex) nav('/mypage', {state:{id:'abc', pw:1234}})
        
        useLocation : 현재 페이지의 정보를 담고 있는 객체를 반환
            - useNavigate를 통해 전달된 state는 useLocation을 통해 가져올 수 있다. 
    */
    const nav = useNavigate()

    // 마이페이지 권한
    let auth = true; 

  return (
    <div>
      About
      <hr/>
      <button onClick={()=>{
            auth ? nav('/mypage',{ state : { id : 'abc'} }) : nav('/')
        }}>마이페이지</button>
    </div>
  )
}

export default About