import React,{ useEffect, useState } from 'react'

const Ex03 = () => {

        // 1. 랜덤한 수를 뽑아서 state에 담아주자.(Math.random()메소드사용-> 1,2,3)
        const [ranNum,setRanNum] = useState(0)  
        // 2. 사용자가 버튼을 누른 숫자 또한 state에 담아주기
        const [selNum,setSelNum] = useState(0)
        // 3. 랜덤한 수와 사용자가 누른 숫자가 같다면 '정답입니다'를 띄워주고 
        // 그렇지 않다면 '땡!'을 띄워주기
        // 단, 비교는 if문 절대 사용X 삼항 연산자 0
        // 그리고 비교하는 삼항연산자는 무조건 return문 안에 작성할 것 ★
        // 또한 문제에서 사용되는 함수는 1개만 생성(btnCk)
        // 이벤트 객체를 통해, 사용자가 누른 숫자를 가져올것 (e.target)
        const[msg,setMsg] = useState()

  
        const btnCk = (event) =>{
            console.log(event.target.innerText)
            setRanNum(Math.floor(Math.random() * 3) + 1)
            setSelNum(parseInt(event.target.innerText))
        }
        useEffect(()=>{
            if(selNum===0){
                setMsg('게임 시작 전입니다.')
            }else if(selNum===ranNum){
                setMsg('이겼습니다')
            }else{
                setMsg('땡~')
            }
        },[selNum])
    return (
    <div>
        <div>
            <button onClick={btnCk}>1</button>
            <button onClick={btnCk}>2</button>
            <button onClick={btnCk}>3</button>
        </div>
        <div>
            <p>내가 선택한 숫자 : {selNum} </p>
            <p>랜덤 숫자 : {ranNum}</p>
            <p>{msg}</p>
            {/* useEffect를 배우기 전 코드 */}
            {/* <h4>{selNum==ranNum
            ?'정답'
            :'땡!'}</h4> */}
        </div>
    </div>
  )
}

export default Ex03
