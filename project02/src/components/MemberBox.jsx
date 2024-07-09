// [Case 1]
// import React from 'react'

// const MemberBox = (props) => {
//   return (
//     <div>
//       <p>안녕하세요.{props.team}의 {props.name}입니다.</p>
//     </div>
//   )
// }
// export default MemberBox

// [Case 2]객체 비구조화 할당
import React from 'react'

const MemberBox = ({team,name}) => {
   
    // 1.
   let user = {
        id:'abc',
        pw: 1234
   }
   console.log(user.id+"님 환영합니다.")

   // 2.
   let {id,pw} = {
    id: 'abc',
    pw: 1234
   }
   console.log(id+"님 환영합니다.")
   
    return (
     <div>
       <p>안녕하세요.{team}의 {name}입니다.</p>
     </div>
   )
 }

 export default MemberBox
