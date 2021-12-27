import React, { Component } from "react";
import ReactDOM from "react-dom";


// 定义类式组件
/* class Count extends Component {
    state = {
        count: 0
    }

    myRef = React.createRef();

    add = () => {
        const { count } = this.state
        this.setState({ count: count + 1 });
    }

    death = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    show = () => {
        alert(this.myRef.current.value);
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const { count } = this.state;
            this.setState({ count: count + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {


        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.death}>点我卸载组件</button>
                <input type="text" ref={this.myRef} />
                <button onClick={this.show}>点我提示输入的内容</button>
            </div>
        )
    }
} */

// 定义一个Count组件(函数式组件)
function Count() {
    console.log('Count'); // 1+n

    const [count, setCount] = React.useState(0)
    const [name] = React.useState('tom')

    // let inputNode
    // let myRef = React.creatRef()
    let myRef2 = React.useRef()

    function add() {
        // setCount(count + 1); // 此种写法虽简单，但是不要在回调中使用
        setCount(count => count + 1);
    }

    function death() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    function show() {
        alert(myRef2.current.value);
    }


    // 使用 React.useEffect 可以在函数时组件中使用生命周期钩子
    React.useEffect(() => { // useRffect 传入的第一个参数相当于，componentDidMount和componentDidupdate
        console.log('componentDidMount');
        let timer = null
        setInterval(() => {
            timer = setCount(count => count + 1);
        }, 1000);
        return () => { // return的这个函数 相当于componentWillUnmount
            console.log('componentWillUnmount');
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h2>当前求和为：{count}-{name}</h2>
            <input type="text" ref={myRef2} />
            <button onClick={add}>点我+1</button>
            <button onClick={death}>卸载组件</button>
            <button onClick={show}>点我提示输入</button>
        </div>
    )
}

export default Count