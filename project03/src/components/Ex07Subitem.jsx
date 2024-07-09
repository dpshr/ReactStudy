import React from 'react'

const Ex07Subitem = ({ parText,Func }) => {
    return (
        <div>
            {parText &&
                <p>1-2. 하위컴포넌트가 받은 값은 {parText}입니다.</p>}


            <p>2-1. 하위 컴포넌트에서 데이터 입력{" "}
                <input type="text" onChange={Func}/>
            </p>
        </div>
    )
}

export default Ex07Subitem
