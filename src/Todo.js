import React from 'react'
import './TodoStyle.css'
import { ACTIONS } from './Todos'

function Todo({ todo,dispatch }) {
    return (
        <div className="todo" >
            <div style={{textDecorationLine : todo.complete ? " line-through" : " "}} className="todo__title">{todo.name}</div>
            <div className="todo__buttons">
                <input type='checkbox' className="todo__toggle" onClick= {()=> {dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id:todo.id}})}}>
                    
                </input>
                <button className="todo__delete"onClick= {()=> {dispatch({type:ACTIONS.DELETE_TODO, payload:{id:todo.id}})}}>
                   x
                </button>

            </div>

            

            
        </div>
    )
}

export default Todo;