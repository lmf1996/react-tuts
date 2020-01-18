import React, {Component} from 'react';

class Like extends Component {
    constructor() {
        super();
        this.state = {
            isLiked: false
        }
    }

    handleLikedClick = () => {
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