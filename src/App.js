//React本身提供了一个空标签 Fragment组件
import React, {Component,Fragment} from 'react';
import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'

//每个组件只能return一个根元素
class App extends Component {
    render() {
        return (
            //可以写<>,也可以写<Fragment>
            <Fragment>
                <TodoHeader title={"待办事项1"}/>
                <TodoInput aaa={"add"}/>
                <TodoList/>
            </Fragment>
        );
    }
}

export default App;