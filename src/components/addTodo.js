import React from 'react'
import {addTodo} from '../actions/index'
import { connect } from 'react-redux'
import '../base.css'
import '../index.css'

const Todo = ({dispatch})=> {
    let input;
    return(
        <div className={'todoapp'}>
        <h1>todolist</h1>
        <input ref= {node => input = node} className="new-todo" placeholder="输入待办事项"
            onKeyDown = { event => {
                if(event.keyCode == 13){
                    if (!input.value.trim()){
                        return
                      }
                      dispatch(addTodo(input.value))
                      input.value = ''
                }
            }} 
            autoFocus = {true}
        >
        </input>
        </div>
    )
}
export default connect()(Todo);