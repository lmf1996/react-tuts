import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool.isRequired

        }))
    }
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo => {
                        return (
                            <TodoItem key={todo.id}
                                {...todo}/>
                        )
                    })
                }
            </ul>
        );
    }
}

export default TodoList;