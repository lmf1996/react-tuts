import React from "react";
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    return (
        <>
            <h1>
                {props.title}
            </h1>
            <h3>
                <p></p>
            </h3>
        </>

    )
}

//检查数据类型的工具
TodoHeader.propTypes = {
    title: PropTypes.string
}