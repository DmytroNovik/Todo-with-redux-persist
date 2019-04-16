import React, {Component} from 'react';
import './style.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux'
import {addTodo, deleteTodo} from '../../actions'
import PropTypes from "prop-types";

class Todo extends Component {
    state = {
        todoInputText: "",
    };

    render() {
        const {todoInputText} = this.state;
        const {todoList, addTodo, deleteTodo} = this.props;

        return (
            <Paper className='todo-wrapper'>
                <h2>{this.context.t("Items")}</h2>
                <div className='add-todo-block'>
                    <TextField
                        className='add-todo-input'
                        label={this.context.t("Type name here...")}
                        variant="outlined"
                        value={todoInputText}
                        onChange={(e) => this.setState({todoInputText: e.target.value})}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            addTodo(todoInputText)
                            this.setState({todoInputText: ""})
                        }}>{this.context.t("Add new")}</Button>
                </div>
                <div className='todo-list'>
                    {todoList.map(item => (
                        <span key={item.id} className='todo-list-item'>
                           <p>{item.text}</p>
                           <Button
                               variant='contained'
                               color='secondary'
                               onClick={() => deleteTodo(item.id)}
                           >
                               {this.context.t("Delete")}
                           </Button>
                       </span>
                    ))}
                </div>
                {todoList.length > 0 && <Divider/>}
            </Paper>
        );
    }
}

Todo.contextTypes = {
    t: PropTypes.func.isRequired
};

Todo.propTypes = {
    todoList: PropTypes.array,
    deleteTodo: PropTypes.func,
    addTodo: PropTypes.func
};

const mapStateToProps = (state) => {
    const {todos} = state;
    return {todoList: todos}
};


const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text))
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todo);
