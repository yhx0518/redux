/*
    准备一个容器组件，该组件主要负责：和redux进行数据的交互，
    可以随意的使用redux的API，和UI组件是父子关系
*/

/* 
    该文件是Count组件的ui组件，只负责结构的呈现、交互等、不可以见到redux任何API
*/
import React, { Component } from "react";

import {
    createIncrementAction,
    createDecrementAction,
    creatIncrementAsyncAction
} from '../../redux/actions/count'

// 引入connect用于连接UI与redux，且connect
import { connect } from 'react-redux'

// UI组件
class Count extends Component {

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
                <h2>当前求和为：{this.props.he}, 下方组件总人数为：{this.props.renCount}</h2>
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


// 创建容器组件
export default connect(
    state => ({
        he: state.he,
        renCount: state.yiduiren.length
    }), // 映射状态
    /* (dispatch) => ({ // 映射操作状态的方法
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: number => dispatch(creatIncrementAsyncAction(number))
    }) */
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: creatIncrementAsyncAction
    }
)(Count);


