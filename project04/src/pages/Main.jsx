import React from 'react'
import { Link } from 'react-router-dom'
const Main = () => {

    /* Link 태그 
    - 웹페이지에서 원래 이동할 때는 a태그를 사용한다. 하지만, a태그는 클릭 시 페이지를 새로 불러오기 때문에 
    React에 적합 X
    - Link 컴포넌트를 사용 : 생김새는 a태그와 유사하지만 브라우저 주소의 경로만 바꾸는 기능이 내장 
    -> Single Page의 특징을 유지할 수 있다. 
    
    */
    


    return (
    <div>
      Main
      <hr />
      <Link to='/about'>About으로 이동</Link>
      <hr />
      <Link to="/product/1?best=true">
            [1] 정보처리기사 스터디 하실 분 구합니다.
      </Link>
      <br />
      <Link to="/product/2">
            [2] 캠핑용품 급처합니다..
      </Link>
      <br />
      <Link to="/product/3">
            [3] 스마트인재개발원 같이 다니실 분....
      </Link>
    </div>
  )
}

export default Main
