import React from "react";
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    console.log(props)
    return (
        <>
            <h1>
                {props.title}
            </h1>
            <h3>
                <p>{props.x+props.y}</p>
            </h3>
        </>

    )
}

//检查数据类型的工具
TodoHeader.propTypes = {
    title: PropTypes.string,
    x:PropTypes.number.isRequired,
    y:PropTypes.number.isRequired
}