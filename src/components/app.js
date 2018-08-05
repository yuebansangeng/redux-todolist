import React from 'react'
import AddTodo from '../components/addTodo'
import TodoList from '../containers/todolist'
import TodoFooter from '../components/footer'

class App extends React.Component{
  render(){
    return(
      <div>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
        <TodoFooter></TodoFooter>
      </div>
    )
  }
}
export default App;