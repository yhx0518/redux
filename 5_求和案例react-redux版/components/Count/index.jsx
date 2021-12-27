/* 
    该文件是Count组件的ui组件，只负责结构的呈现、交互等、不可以见到redux任何API
*/
import React, { Component } from "react";
/* import {
    createIncrementAction,
    createDecrementAction,
    creatIncrementAsyncAction
} from '../../redux/count_action' */

export default class Count extends Component {

    state = { name: 'TOM' }

    increment = () => {
        // 获取用户选择的数字
        const { value } = this.checkNumber;
        this.props.jia(value * 1)
    }

    decrement = () => {
        // 获取用户选择的数字
        const { value } = this.checkNumber;
        this.props.jian(value * 1)
    }

    incrementIfOdd = () => {
        // 获取用户选择的数字
        const { value } = this.checkNumber;
        if (this.props.he % 2 !== 0) {
            this.props.jia(value * 1)

        }
    }

    incrementAsync = () => {
        // 获取用户选择的数字
        const { value } = this.checkNumber;
        this.props.jiaAsync(value * 1)
    }

    render() {
        console.log('Count的UI组件是', this.props);
        return (
            <div>
                <h2>当前求和为：{this.props.he}</h2>
                <select ref={c => this.checkNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数+</button>&nbsp;
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        )
    }
}