//react通过ref获取组件或dom元素，使用ref之前先调用react.createRef来创建一个ref
import React, {Component,createRef} from 'react';
import PropTypes from 'prop-types'

class TodoInput extends Component {
    static propTypes = {
        btnText: PropTypes.string
    };

    constructor() {
        super();
        this.state = {
            inputValue: '请输入待办事项'
        };
        this.inputDom = createRef();
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    };

    handleAddClick = () => {
        if(this.state.inputValue===''){
            return
        }
        this.props.addTodo(this.state.inputValue);
        this.setState({
            inputValue: ''
        },()=>{
            this.inputDom.current.focus();
        })
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleAddClick();
        }
    };

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.inputValue}
                       onChange={this.handleInputChange}
                       onKeyUp={this.handleKeyUp}
                       ref={this.inputDom}

                />
                {/** 在render里的匿名函数，每次render，都会重新生成一个匿名函数
                 这样效率不高 最好把这个匿名函数提到外面去，取个名字 **/}
                <button onClick={this.handleAddClick}> {this.props.btnText}</button>
            </div>
        );
    }
}

export default TodoInput;