import React from 'react';
import {render} from 'react-dom'
import '../base.css'
import '../index.css'
import {connect} from 'react-redux'
import {selectName,clearCompleted} from '../actions/index'

class TodoFooter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var activeItem = this.props.todos.reduce((num,todo)=>{
            return todo.complete ? num : num + 1;
        },0);
        return (
            <div className="footer">
                <span >{activeItem} item left</span> 	
                <button onClick={this.props.onSetName.bind(this,"all")}
                    className={ this.props.name === "all" ? "selected" : ""}>
                        All
                </button>  
                <button onClick={this.props.onSetName.bind(this,"active")}
                    className={ this.props.name === "active" ? "selected" : ""}>
                        active
                </button>
                <button onClick={this.props.onSetName.bind(this,"complete")}
                    className={ this.props.name === "complete" ? "selected" : ""}>
                        complete
                </button>
                <button onClick={this.props.removeAllComplete.bind(this)}>
                        clear allcomplete
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name : state.name,
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetName: (name) => dispatch(selectName(name)),
        removeAllComplete: () => dispatch(clearCompleted())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter);
