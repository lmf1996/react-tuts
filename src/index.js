import React from "react";
import ReactDOM from "react-dom";

const createapp = (props)=>{
    return <div>
        {/* */}
        <h1>{props.title}</h1>
    </div>

}
const app = createapp(
    {
        title:'React 16.8'
    }
);
ReactDOM.render(
    app,
    document.querySelector('#root')
)