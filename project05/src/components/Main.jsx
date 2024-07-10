import React from 'react'

const Main = () => {

  console.log(JSON.parse(sessionStorage.getItem('user')))




  return (
    <div className='main-container'>
      <img src="https://wimg.mk.co.kr/meet/neds/2022/10/image_readtop_2022_905650_16656394525195408.jpg" width='600px' alt=''/>
      {JSON.parse(sessionStorage.getItem('user'))
      ? <h1>{JSON.parse(sessionStorage.getItem('user')).id}님 환영합니다.</h1>
      : <h1>손흥민은 누구인가?</h1>
      }
      <p>대한민국 국적의 토트넘 홋스퍼 FC 소속 축구 선수. 주 포지션은 윙어. 토트넘 홋스퍼 FC와 대한민국 축구 국가대표팀의 주장을 맡고 있다.
        PL과 UCL 역대 아시아 선수 최다 득점자이며 발롱도르 후보 30인과 FIFA FIFPro 월드 XI 후보 55인에 선정되었다. 프리미어 리그에서 아시아 선수 최초로 득점왕을 수상했고, PFA 올해의 팀에 이름을 올렸으며, 프리미어 리그 통산 100호 골을 달성했다. 아시아 선수 최초로 잉글랜드 FA컵에서 득점왕을 차지했고, 토트넘 역사상 최다 도움을 기록했다.</p>
    </div>
  )
}

export default Main
