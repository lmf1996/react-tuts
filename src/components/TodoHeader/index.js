import React from "react";

export default function TodoHeader(props) {
    console.log(props)
    return(
        <h1>
            {props.title}
        </h1>
    )
}