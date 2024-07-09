import React, { useEffect, useState } from 'react'

const Ex13 = () => {


    // 1. 참참참 게임은 유저가 상,하,좌,우를 선택할 수 있다 . 
    // 2. 컴퓨터는 랜덤으로 상,하,좌,우가 결정 된다. 
    // 3. 유저가 버튼을 선택하면 게임이 시작된다. 
    // 4. 유저와 컴퓨터의 선택이 같은경우 유저가 승리한다. 

    //  a. 상,하,좌,우가 포함되어있는 배열 생성
    const arr = ['상','하','좌','우']
    const [myPick,setMyPick] = useState()
    const [comPick,setComPick] = useState()
    const [msg,setMsg]= useState()
    const makeRandom =()=>{
        return Math.floor(Math.random() * 4)
    }
    const ckBtn = (e) => {
        setMyPick(e.target.innerText)
        setComPick(arr[makeRandom()])
        // nodejs 코드는 위에서 아래로 무조건 흘러가지는 않는다.
        //  => useEffect를 사용
    }
    useEffect(()=>{
        if(!myPick){
            setMsg('게임시작 전입니다.')
        }else if(myPick===comPick){
            setMsg('승리!')
        }else{
            setMsg('패배')
        }
    },[myPick,comPick])
    
    //  b. 0~3까지의 랜덤한 숫자를 뽑아 a 배열에서 적절한 값을 도출한다. 
    //  c. b에서 낸 값을 comPick 이라는 state에 세팅
    //  d. 사용자가 누른 버튼의 값을 myPick 이라는 state에 세팅

    //  e. 게임 시작 전에는 " 게임 시작 전.." /
    //  같으면 "승리" 다르면 "패배"
    return (
        <div>
            <h1>참참참!</h1>
                {arr.map(item=><button key={item} onClick={ckBtn}>{item}</button>)}
            <div>
                나의 선택: {myPick}
                <br />
                컴퓨터의 선택 : {comPick}
                <br />
                <strong>{msg}</strong>
            </div>
        </div>

    )
}

export default Ex13
