import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({props}) => {
  // console.log(props)
  const nav = useNavigate()
  return (
    <div className='product-container' onClick={()=>{nav(`/detail/${props.no}`)}}>
      <img width="100px" src={props.imgSrc}/>
      <strong>{props.title}</strong>
      <p>가격:{props.price}원 <br />
      배송비 : {props.delivery>0?<>{props.delivery}원</>:<>배송비무료</>}
      </p>
      
    </div>
  )
}

export default ProductItem
