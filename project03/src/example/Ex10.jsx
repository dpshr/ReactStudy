import React, { useState } from 'react'
import '../style/ex10.css'
import List from '../components/List'
import { TodoContext } from '../context/TodoContext'
const Ex10 = () => {
    // 할일들이 담겨있는 배열
    const [todos, setTodos] = useState([
        {
            text: '물마시기',
            conpleted: false,
            num: 1
        }
    ])

        // 새로운 할일 텍스트를 담아줄 state
        const[newTodo,setNewTodo] = useState('')


    /**  새로운 todo 데이터를 todos배열에 추가하는 함수 */ 
    const handleNewTodo =()=>{
        // console.log('handleNewTodo',newTodo)
        // newTodo에 담겨있는 할일을 todos 배열에 추가하겠다.
        setTodos([
            ...todos, // 스프레드 문법: 기존 배열이 있다면, 유지 시킨 후 그 뒤로 내용 추가하겠다.
            {
            text:newTodo,
            completed: false,
            num: todos[todos.length-1].num + 1
        }])
        
        setNewTodo("")

    }

    const handleTodoDelete =(delNum)=>{
        // console.log('handleTodoDelete',delNum)
        // todos 배열 안에서, 본인의 num 가 delNum과 같다면 삭제 
        // == 본인의 num가 delNum과 같지 않은 애들만 남겨두겠다. (filter)
        const filterTodo = todos.filter(item => item.num !==delNum)
        setTodos(filterTodo)
    }

    /** 선택한 todo 데이터의 completed 여부를 토글하는 함수 */
    const handleTodoToggle = (togNum) =>{
        // console.log('handleTodoToggle',togNum)

        // 1. todos 배열에서 본인의 num이 toNum인 객체를 찾을 것
        //  - 배열함수인 find 를 사용
         const target = todos.find(item=> item.num===togNum)
        //  console.log(target) 
        // 2. 만약 1번 조건에 부합하는 객체가 있다면, 그 객체의 completed
        // 상태와 반대되는 상태로 만들어주겠다

        if(target){
            target.completed= !target.completed
            // 내가  찾은 그 객체 completed 상태 바꿔주기 => todos가 바뀌었다. 
            setTodos([...todos])
            // 바뀐 상태의 todos를 한번 더 setting 함으로써 화면에 렌더링
        }
        // 3. 바뀐 상태를 todos에 적용
    }

    return (
        <TodoContext.Provider value={{todos,setTodos,handleNewTodo, newTodo,setNewTodo,handleTodoDelete,handleTodoToggle}}>
            <div className='todo-container'>
                <h1>Todo List</h1>
                <List></List>
            </div>
        </TodoContext.Provider>
    )
}

export default Ex10
