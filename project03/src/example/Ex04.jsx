import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../style/ex04.css'
import DiceBox from '../components/DiceBox';
const Ex04 = () => {


  /* React Bootstrap을 통해 화면 구성을 간단하게 해보자
  - 리액트와 관련된 개념 X
  - 남들이 만든 리액트 라이브러리를 가져다가 사용하는 방법
  */
  /* 주사위 게임을 해보자! 
    1. 유저는 '던지기'버튼을 클릭하면 'throwDice'라는 함수가 호출 된다.
    2. throwDice 함수
     - 주사위의 눈이 1~6까지 중 랜덤하게 표시된다.
     - 유저의 주사위와 컴퓨터의 주사위 모두 랜덤이다.
    3. 왼쪽에는 나의 점수, 오른쪽에는 컴퓨터의 점수가 기록 될 수 있도록
      DiceBox를 적절하게 세팅한다.(props)
    4. 내 점수가 더 높으면 나의 승리, 내 점수가 더 낮으면 나의 패배, 동점일 때 ,나의 패배
     - 점수는 반드시 return문 안에서 삼항 연산자로 사용한다.
    5. reset 버튼 클릭 시 , 전부 1로 돌아가게 만들어 줄 것 (resetDice 함수)
  */
    const[UserDiceNum, UserSetDiceNum] = useState(1)
    const[ComDiceNum, ComSetDiceNum] = useState(1)
    const throwDice = () =>{
      UserSetDiceNum(Math.floor(Math.random() * 6) + 1)
      ComSetDiceNum(Math.floor(Math.random() * 6) + 1) 
    }
    const resetDice = () =>{
      UserSetDiceNum(1)
      ComSetDiceNum(1)
    }
  return (
    <div className='box'>
      <h1>주사위게임</h1>
      <div>
        <Button variant="success" onClick={throwDice}>던지기</Button>
        <Button variant="warning" onClick={resetDice}>Reset</Button>
      </div>
      <div className='board-container'>
        <DiceBox DiceNum={UserDiceNum} name="나"></DiceBox>
        <DiceBox DiceNum={ComDiceNum} name="컴퓨터"></DiceBox>
      </div>
      <h2>{UserDiceNum>ComDiceNum?"승리":"패배"}</h2>
    </div>
  )
}



export default Ex04



/* React Bootstrap을 통해 화면 구성을 간단하게 해보자
- 리액트와 관련된 개념 X
- 남들이 만든 리액트 라이브러리를 가져다가 사용하는 방법
*/
