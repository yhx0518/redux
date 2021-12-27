import React, { Component } from "react";
import store from '../../redux/store.js'
import {
    createIncrementAction,
    createDecrementAction,
    creatIncrementAsyncAction
} from '../../redux/count_action'

export default class Count extends Component {

    state = { name: 'TOM' }

    increment = () => {
        // 获取用户选择的数字
        const { value } = this.checkNumber;
        store.dispatch(createIncrementAction(value * 1))
        this.render()
    }

    decrement = () => {
        // 获取用户选择的数字
        const { value } = this.checkNumber;
        // 获取原来的和
        store.dispatch(createDecrementAction(value * 1))
    }

    incrementIfOdd = () => {
        // 获取用户选择的数字
        const { value } = this.checkNumber;
        if (store.getState() % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }

    incrementAsync = () => {
        // 获取用户选择的数字
        const { value } = this.checkNumber;
        store.dispatch(creatIncrementAsyncAction(value * 1))
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>
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