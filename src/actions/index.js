let nextTodoId = 0;

export const addTodo = (text) => ({
    type: 'addTodo',
    id: ++nextTodoId,
    text
})

export const deleteTodo = (id) => ({
    type: 'deleteTodo',
    id
})

export const editTodo = (id,text) =>({
    type: 'editTodo',
    id,
    text
})

export const doubleClick = (id) => ({
    type: 'doubleClick',
    id
})

export const toggleTodo = (id) => ({
    type: 'toggleTodo',
    id
})

export const toggleAll = () => ({
    type: 'toggleAll'
})

export const clearCompleted = () => ({
    type: 'clearCompleted'
})

export const selectName = (name) => ({
    type: 'selectName',
    name
})

