import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = ({list}) => {

  // list 에서 div를 클릭했을 때, 해당 아이템의 고유번호를 넘겨줬다
  // detail/고유번호 => detail/:num 
  // 아~ useParams의 num 안에 우리가 넣어놓은 고유번호가 있겠군! 

  const { num }= useParams()
  console.log('내가 받아온 숫자', num)

  const linkStyle = {
    textDecoration : 'none', 
    color : 'navy'
  }

  const [obj, setObj] = useState({})
  console.log('넘어온 list', list.find(item => item.no == num))
  
  useEffect(()=>{
    setObj(list.find(item => item.no == num))
  },[list])

  return (
    <div className='list-container'>
      {obj &&
         <div className='detail-item'>
         <img width="200px" src={obj.imgSrc}></img>
         <h2>{obj.title}</h2> 
         <p>
           <span>가격 : {obj.price}원</span> <br/>

           <span>배송비 : 
            {obj.delivery > 0
            ? <>{obj.delivery}원</>
            : <> 무료</>
            }        
            </span> <br/>          
         </p>         
         <Link style={linkStyle} to="/list">목록으로 돌아가기</Link>
         <Link style={linkStyle} to="/">메인으로 돌아가기</Link>
     </div>
      }

     
    </div>
  )
}

export default ProductDetail
