import {connect} from 'react-redux'
import {deleteTodo,toggleTodo, editTodo,doubleClick,toggleAll} from '../actions/index'
import TodoList from '../components/todo'

    const select = (state)=> {
        if (state.name === 'active') {
            return state.todos.filter(todo => todo.complete === false);
        } else if (state.name === 'complete') {
            return state.todos.filter(todo => todo.complete === true);
        } else {
            return state.todos;
        }
    }

    const mapStateToProps = (state) => {
        return {
            todos: select(state)
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            onEdit: (id,text) => dispatch(editTodo(id,text)),
            doubleClick: (id) => dispatch(doubleClick(id)),
            onRemove: (id)=> dispatch(deleteTodo(id)),
            onToogle: (id) => dispatch(toggleTodo(id)),
            ToggleAll: () => dispatch(toggleAll())
        }
    };
    export default connect(mapStateToProps, mapDispatchToProps)(TodoList);