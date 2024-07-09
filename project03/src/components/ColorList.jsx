import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext';

const ColorList = () => {

    const {setCkColor} = useContext(ColorContext)

    const color = ['red', 'orange', 'yellow', 'green', 'blue'];
    return (
        <div style={{display:'flex'}}>
            {color.map(item =>
                <div 
                    onClick={()=>{setCkColor(item)}}
                    style={{
                    width: '100px',
                    height: '100px',
                    background: item
                }}></div>
            )}
        </div>
    )
}

export default ColorList
