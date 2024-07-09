import React from 'react'

const MenuBox = (props) => {
    /* rafce + Enter = 컨포넌트의 구성 요소
        (react arrow function component)
     */
    console.log('전달받은내용',props.name)
    console.log(props.value)
  return (
    <div>
        <h3>{props.name}</h3>
        <p>{props.value}</p>
        <p>{props.temper}</p>
    </div>
  )
}

export default MenuBox
