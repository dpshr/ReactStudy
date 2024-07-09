import React from 'react'

const DiceBox = ({DiceNum,name}) => {
  return (
    <div className='board-area'>
        <h3>{name}</h3>
        <img src={`http://localhost:3000/img/dice${DiceNum}.png`} alt='Dice'/>
    </div>
  )
}

export default DiceBox
