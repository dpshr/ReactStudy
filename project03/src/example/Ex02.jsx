import React from 'react'
import pic from '../img/pic.jpg'
import { useState } from 'react'
const Ex02 = () => {

    /* React에서 이미지 경로를 설정하는 방법! 
        1. src 폴더에 이미지가 있는 경우
        - import 이미지변수 from '이미지경로'
        - <img src={이미지변수}/>
        2. public 폴더에 이미지가 있는 경우
        - public 이라는 폴더는 그 자체로 서버와 통신을 하는 폴더다.=> 자신의 주소를 가지고 있다.
        - url 에 서버주소/폴더이름/사진이름.확장자 라고 입력하면
        마치 외부주소를 입력한 것 처럼 사용이 됨
        - 보통 static 파일들은 대부분 public에 보관
    */

    /* 예제문제 
        1. 사용자가 하얀 하트를 눌렀을 때
            - 하얀하트 ->빨간하트
            - 0개 -> 1개
        2. 사용자가 빨간 하트를 눌렀을 때
            - 빨간 하트 -> 하얀하트
            - 1 -> 0개

        - 이 때, 모든 요소들은 화면에 즉시 반응해야한다.
        - 사용되는 state는 2개
        - 사용되는 함수는 1개
    */
        const[num, setNum] = useState(0)
        const[heart,setHeart]=useState('🤍')
        const Like = () =>{
            console.log('Like 함수 호출')
            
            if(num===0){
                setNum(num+1)
                setHeart('❤️')
            }else if(num!==0){
                setNum(num-1)
                setHeart('🤍')
            }
        }
  return (
    <div>
        {/* <img width="300px" src={pic}></img> */}
        <img src="http://localhost:3000/img/pic.jpg" width='300px'></img>
        <p>
            <span onClick={Like}>{heart}</span>
            <span>좋아요{num}개</span>
        </p>
    </div>
  )
}

export default Ex02
