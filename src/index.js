import React, {Component, createElement} from "react";
import ReactDOM,{render} from "react-dom";

class APP extends Component {
    render() {
        return (
            React.createElement(
                'div',
                {
                    className: 'app',
                    id: 'appRoot'
                },
                React.createElement(
                    'h1',
                    {
                        className:'title'
                    },
                    'JSX原理'
                )
            )
        )
    }
}

render(
    <APP />,
    document.querySelector('#root')
);