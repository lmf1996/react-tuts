//React本身提供了一个空标签 Fragment组件
import React, {Component, Fragment} from 'react';
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

//每个组件只能return一个根元素
class App extends Component {
    state = {
        title: '事项',
        todos: [
            {
                id: 1,
                title: '吃饭',
                isCompleted: true,
                name: 'lmf'
            },
            {
                id: 2,
                title: '睡觉',
                isCompleted: false,
                name: 'sb'
            }
        ]
    };

    addTodo = (todoTitle) => {
        this.setState({
            /**要用concat而不能用push 注意返回值类型 **/
            todos: this.state.todos.concat({
                id: Math.random(),
                title: todoTitle,
                isCompleted: false,
                name: 'sb2'
            })
        })
    };

    onCompletedChange = (id) => {
        console.log('onCompletedChange');
        this.setState((prevState) => {
                return {
                    todos: prevState.todos.map(todo => {
                        if (todo.id === id) {
                            todo.isCompleted = !todo.isCompleted;
                        }
                        return todo
                    })
                }
            }
        )
    };

    render() {
        return (
            //可以写<>,也可以写<Fragment>
            //函数式属于无状态组件
            //类式属于有状态组件
            <Fragment>
                <TodoHeader title={this.state.title}/>
                <TodoInput addTodo={this.addTodo} btnText={"add"}/>
                <TodoList todos={this.state.todos} onCompletdChange={this.onCompletedChange}/>
                <Like/>
            </Fragment>
        );
    }
}

export default App;