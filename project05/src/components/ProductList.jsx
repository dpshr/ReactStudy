import React, { useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'
const ProductList = ({list,setList}) => {

  // 1. App.js에서 props로 보내준 list와 setList를 받아줄 것
  // 2. axios를 통해 받아온 "배열"을 list안에 세팅
  // 3. 세팅된 list를 통해 map 함수로 ProductItem을 상품 개수 만큼 나열해보자.

  const getData = ()=>{
    let url = `https://dpshr.github.io/bestlist.json`

    axios
    .get(url)
    .then(res => {
      // console.log(res.data.list)
      let list = res.data.list
      setList(list)
    })
    .catch(err => {
        console.log('err', err)
    })

}
  useEffect(()=>{
      // 1. axios 설치 (npm)
      // 2. import 로 axios 수입
      // 3. get 방식으로 bestlist.json 데이터를 가져오겠다.
      //              ** 힌트: 전 문제에서는 외부 주소만 사용을 해봤는데,
      //                     이번 bestlist.json <- 얘도 본인의 주소를 가지고 있음
      // 4. 잘 가지고 왔으면, console 창에 가져온 json을 캡쳐해서 단톡방
      // axios 참고자료 ->  project03 -> src -> example -> Ex14.jsx
      getData()
  },[])
  return (
    <div className='list-container'>
      {list.map(item=><ProductItem props={item} key={item.no}></ProductItem>)}
    </div>
  )
}

export default ProductList
