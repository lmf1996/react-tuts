import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        return (
            <div>
                <input type="text"/><button>{this.props.aaa}</button>
            </div>
        );
    }
}

export default TodoInput;