import React, {Component} from 'react';

class Like extends Component {
    constructor() {
        super();
        this.state = {
            isLiked: false
        }
    }

    handleLikedClick = () => {
        //只能使用这个setter方法来修改 直接修改字段不会重新渲染
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        return (
            <div>
                <span onClick={this.handleLikedClick}>
                    {
                        this.state.isLiked ? '👍' : '👎'
                    }
                </span>
            </div>
        );
    }
}

export default Like;