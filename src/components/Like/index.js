import React, {Component} from 'react';

class Like extends Component {
    constructor() {
        super();
        this.state = {
            isLiked: false
        }
    }

    render() {
        return (
            <div>
                <span>
                    {
                        this.state.isLiked ? '👍' : '👎'
                    }
                </span>
            </div>
        );
    }
}

export default Like;