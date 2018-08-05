import React from 'react';
import {render} from 'react-dom'
import '../base.css'
import '../index.css'

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editText: '',
            oldText: ''
        }
    }
    handleDoubleClick(id,text){
        this.props.doubleClick(id);
        this.setState({editText: text,oldText: text});
    }
    handleChange(event){
        this.setState({editText: event.target.value});
    }
    handleEdit(id,text){
        if(!text.trim()){
            this.props.onRemove(id);
        }else{
            this.props.onEdit(id,text)
        }
    }
    render(){
        var list;
        let input;
        list = this.props.todos.map((todo) => {
            return(
                <li key={todo.id} className={[todo.editing? 'editing': null,todo.complete?'completed':null].join(' ')}>	
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked = {todo.complete}
                        onChange = {this.props.onToogle.bind(this,todo.id)}
                    />
                    <label onDoubleClick = {this.handleDoubleClick.bind(this,todo.id,todo.text)}> 
                        {todo.text}
                    </label>
                    <button className="destroy" onClick={this.props.onRemove.bind(this,todo.id)}/>
                </div>
                <input
                    ref= {node => input = node}
                    className = "edit"
                    value = {this.state.editText}
                    onBlur = {this.handleEdit.bind(this,todo.id,this.state.editText)} 
                    onChange = {this.handleChange.bind(this)}
                    onKeyDown = {event => {
                        if(event.keyCode == 27){
                            this.setState({editText: this.state.oldText});
                            this.handleEdit(todo.id,this.state.editText);
                        }
                        if(event.keyCode == 13){
                            this.handleEdit(todo.id,this.state.editText);
                        }
                    }}
                />
            </li>
            ) 
        });
        return(
            <div className="main">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    onChange = {this.props.ToggleAll.bind(this)}
                />
                <label
                    htmlFor="toggle-all"
                />
                <ul className="todo-list">
                    {list}
                </ul>
            </div>
        )
    }
}
export default TodoList;
