import React, {Component} from 'react';

class TodoItem extends Component {
    handleCheckboxChange = () => {
        // this.props.onCompletedChange(this.props.id);
        const {
            onCompletedChange = () => {
                console.log("你应该传入onCompletedChange方法")
            },
            id,
            title
        } = this.props;
        console.log(title);
        onCompletedChange(id);
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
                    {this.props.isCompleted ? ' 已完成' : ' 未完成'}
                </span>
            </li>
        );
    }
}

export default TodoItem;