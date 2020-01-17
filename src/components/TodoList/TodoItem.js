import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        console.log(this.props)
        return (
            <li>
                {this.props.title}
            </li>
        );
    }
}

export default TodoItem;