import React, {Component} from 'react';

class TodoItem extends Component {
    handleCheckboxChange = () => {
        console.log(this)
        // this.props.onCompletedChange();
    };

    render() {
        return (
            <li>
                <input type={"checkbox"}
                    // name={""} id={""}
                       checked={this.props.isCompleted}
                       onChange={this.handleCheckboxChange}/>
                <span>
                    {this.props.title}
                    {this.props.isCompleted ? '已完成' : '未完成'}
                </span>
            </li>
        );
    }
}

export default TodoItem;