import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'

const ColorResult = () => {

    const {ckColor}= useContext(ColorContext)
    console.log('ckColor',ckColor)
    return (
        <div>
            <div style={{
                width: '100px',
                height: '100px',
                background: ckColor

            }}></div>
        </div>
    )
}

export default ColorResult
