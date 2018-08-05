const todos = (state = {todos:[],name: 'all'}, action) => {
    let index = 0;
    index = state.todos.indexOf(state.todos.find(todo => todo.id === action.id));
    switch(action.type){
        case 'addTodo':
        let state_todos = state.todos.slice();
        state_todos.push({id: action.id,text: action.text,complete: false,editing: false});
        return {todos: [...state_todos],name: state.name};

        case 'toggleTodo':
        let state_todos = state.todos.slice();
        state.todos[index].complete = !state.todos[index].complete;
        return {todos: [...state.todos],name: state.name}

        case 'doubleClick':
        state.todos[index].editing = true; 
        return {todos: [...state.todos],name: state.name}

        case 'editTodo':
        state.todos[index].text = action.text;
        state.todos[index].editing = false;
        return {todos: [...state.todos],name: state.name}

        case 'deleteTodo':
        state.todos.splice(index,1);
        return {todos: [...state.todos],name: state.name}

        case 'selectName':
        return {todos: [...state.todos], name:action.name};

        case 'clearCompleted':
        state.todos = state.todos.filter(todo => todo.complete === false)
        return {todos: [...state.todos],name: state.name}

        case 'toggleAll':
        for(var i = 0; i < state.todos.length; i++){
            state.todos[i].complete = true;
        }
        return {todos: [...state.todos],name: state.name}

        default: 
          return {todos: [...state.todos],name: state.name}
    }
}
export default todos;