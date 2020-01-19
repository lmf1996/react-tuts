import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <li>
                {this.props.title}
            </li>
        );
    }
}

export default TodoItem;