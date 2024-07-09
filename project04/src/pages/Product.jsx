import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {


    /* useparams()
        - url의 파라미터 정보를 가져오는 기능
        - 물품의 고유한 ID값, 고유한 번호 등을 설정하는데 적합
        - 한가지 정보에만 사용 가능
        - 쇼핑몰의 물품 상세 페이지에 이용된다.
    */

    /* url을 통해 정보를 받아올 때 
        - http://주소?user=abc
            => Query String
        - ?키=값&키=값&키=값
        -> url의 쿼리스트링 정보를 가져오려면? useSearchParams
    */

  let {num} =  useParams()
    console.log('num',num)

    const [query, setQuery]= useSearchParams()
    console.log(query.get('best'))

  return (
    <div>

        {query.get('best')=='true'&&<p>인기글</p>}
      {num}번째 게시글 입니다.
    </div>
  )
}

export default Product
