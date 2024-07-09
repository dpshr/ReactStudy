import React from 'react'
import CardBox from '../components/CardBox'
import data from '../ex06list.json'
const Ex06 = () => {
    /* map 함수 실습
    1. data 안에 있는 배열을 찾아라
        -왜 ? map은 '배열'함수임 map을 사용할 대상을 찾아야함
    2. 찾은 배열에 map 함수를 사용
    3. CardBox를 map 함수와 함께 렌더링
        -props 사용
    */


    /* filter 함수
        : 배열의 각 요소에 대해서 주어진 함수의 값이 true 인 요소들만 모아서 새로운 배열로 반환하는 함수
    */
    const Filter = data.result.filter(item=>item.birthYear<=1994)
    
    
  return (
    <div>
      <h1>Map 실습</h1>
      <div style={{display:'flex'}}>
        {Filter.map(
            item=>(
            <CardBox item={item} key={item.title}></CardBox>
            )
        )}
      </div>
      <h1>Filter 함수 실습</h1>
      <p>1994년생과 나이가 같거나, 그보다 나이가 많은 사람만 출력하시오</p>
    </div>
  )
}

export default Ex06
