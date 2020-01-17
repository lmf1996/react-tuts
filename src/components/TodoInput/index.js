import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodoInput extends Component {
    static propTypes = {
        btnText:PropTypes.string
    }
    render() {
        return (
            <div>
                <input type="text"/><button>{this.props.btnText}</button>
            </div>
        );
    }
}

export default TodoInput;