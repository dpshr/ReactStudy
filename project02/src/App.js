import './App.css';
import MemberBox from './components/MemberBox';
import MenuBox from './components/MenuBox';
function App() {
  /* 컴포넌트(Component): 리액트로 만들어진 앱을 이루는 최소단위
    -> 반복되는 코드를 하나로 묶어 컨포넌트로 만든다.
    -> 내가 원하는 코드를 묶어 '태그화'시킨다.
    ★ 반드시 컴포넌트는 "대문자"로 시작할 것

    프로퍼티(props): 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용
    
    * 상위 컴포넌트 : 
      <컴포넌트이름 속성 = "값"/>
      -단순 문자열 "값"
      -변수 사용{변수 이름}
      
    * 하위 컴포넌트에서는 매개변수로 값(Object)을 전달 받는다.
      매개변수.속성이름 <-

    ★ js tip! "구조분해할당"/"비구조화할당"
    - 배열이나 객체 속성을 해체하여 개별 변수에 값을 담는 표현식
    

    let [x,y] = [1,2]
    // x => 1, y=>2

    let obj = {
      x: 1, 
      y: 2
    }
    x=>1, y=>2

    * props 또한 구조분해할당이 가능하다. 
    - 기존 : props => props.name
    - 분해 : {name} => name
   */
  let icedOnly ="아이스만 가능합니다."
  let team ="Trinity"
  return (
    <div>
      <MenuBox name="녹차라떼" value="3500" temper={icedOnly}></MenuBox>
      <MenuBox name="복숭아 아이스티" value="4000"></MenuBox>
      <MenuBox name="아메리카노" value="2000"></MenuBox>
      <MenuBox name="바닐라 라떼"value="4500"></MenuBox>


      {/* 실습) 팀원을 소개하는 컴포넌트를 생성해보겠습니다.
          [결과창]
          안녕하세요. 아이브의 장원영입니다.
          안녕하세요. 아이브의 안유진입니다.
          안녕하세요. 아이브의 레이입니다.
          .....

          - 팀명은 반복되기 때문에 변수처리
          - 이름은 고유하기 때문에 값으로 처리
          - 컴포넌트의 이름은 MemberBox라고 지정
      */}
      <hr/>
      <MemberBox name="윤에녹" team={team}></MemberBox>
      <MemberBox name="오창민" team={team}></MemberBox>
      <MemberBox name="진동준" team={team}></MemberBox>


    </div>
  );
}

export default App;
