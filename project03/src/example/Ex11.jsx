import React, { Component } from 'react'

//  rcc + Enter : react Class Component
export default class Ex11 extends Component {

    /* LifeCycle
    - 각각의 컴포넌트들은 생명주기가 존재하는데 이러한 일련의 프로세스를
    프로그래머가 통제하는 것

    1. Mount 화면이 처음 생겨날때
        - constructor (1)
            => 값을 초기화할 때 (변수, state, 함수, use~ 모든 선언문..)
        - render : 화면 구성(2)
            => DOM 요소, Component 요소 등 화면을 이루는 요소들 
        - componentDidMount : 화면 구성 완료 직후(3)
            => UI 세팅이 완료된 이후 실행되기 때문에 무거운 데이터들이나 조건에 따라 떠라하는 복잡한 구문들이 이곳으로 들어감
            (API,Call, timeout)
    2. Update 화면의 변화가 있을때
        - componentDidUpdate : state나 props값이 갱신 됐을 때  
    3. UnMount 화면에서 사라질때
    */

    constructor(props){
        super(props)
        console.log('1.constroctor')
        this.state = {
            counter: 0
        }
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement(){
        console.log('increment')
        this.setState({
            counter: (this.state.counter+=1)
        })
    }

    componentDidUpdate(){
        console.log('4.update')
    }

    componentDidMount(){
        console.log('3.componentDidMout')
    }
  render() {
    return (
      <div>
        {console.log('2. render')}
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>+1</button>
      </div>
    )
  }
}
