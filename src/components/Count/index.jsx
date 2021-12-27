import React, { Component } from "react";

export default class Count extends Component {

    myRef = React.createRef();

    increment = () => {
        const { value } = this.myRef.current;
        this.props.jia(value * 1);
    }

    decrement = () => {
        const { value } = this.myRef.current;
        this.props.jian(value * 1);
    }

    incrementOdd = () => {
        const { value } = this.myRef.current;
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)

        }

    }

    incrementAsync = () => {
        const { value } = this.myRef.current;
        this.props.jiaAsync(value * 1)

    }

    render() {
        return (
            <div>
                <h2>当前求和为:{this.props.count}</h2>
                <select ref={this.myRef} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementOdd}>奇数加</button>
                <button onClick={this.incrementAsync}>异步加</button>

            </div>
        )
    }
}